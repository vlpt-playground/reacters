import Router from 'koa-router';
import sanitizeHtml from 'sanitize-html';
import { needAuth } from '../../lib/middlewares/authMiddlewares';
import { PostSchema, CommentSchema } from '../../lib/schemas';
import Post from '../../models/Post';
import User, { UserTokenData } from '../../models/User';
import { Middleware } from 'koa';
import Comment from '../../models/Comment';

const sanitizeOption = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2']),
  allowedStyles: {
    '*': {
      color: [/^\#(0x)?[0-9a-f]+$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],
      'text-align': [/^left$/, /^right$/, /^center$/],
      'font-size': [/^\d+(?:px|em|%)$/]
    },
    p: {
      'font-size': [/^\d+rem$/]
    }
  },
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src']
  },
  allowedSchemes: ['data', 'http']
};

const posts = new Router();

/**
 * write post
 * POST /api/posts
 * {
 *   title,
 *   body
 * }
 */
posts.post('/', needAuth, async ctx => {
  const validation = PostSchema.validate(ctx.request.body);
  if (validation.error) {
    ctx.status = 400;
    ctx.body = validation.error;
    return;
  }
  const { title, body } = ctx.request.body as { title: string; body: string };
  const { user }: { user: UserTokenData } = ctx.state;

  const sanitized = sanitizeHtml(body, sanitizeOption);
  const post = new Post({
    title,
    body: sanitized,
    user_id: user.id
  });

  try {
    await Promise.all([post.save(), post.resolveUser()]);
    ctx.body = post.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
});

/**
 * list posts
 * GET /api/posts?page=1
 */
posts.get('/', async ctx => {
  const { page } = ctx.query;
  const parsedPage = (isNaN(page) ? 1 : parseInt(page, 10)) || 1;
  try {
    const posts = await Post.findAndCountAll({
      offset: (parsedPage - 1) * 10,
      limit: 10,
      include: [User],
      order: [['created_at', 'DESC']]
    });
    ctx.body = {
      count: posts.count,
      posts: posts.rows.map(post => post.serialize(true))
    };
  } catch (e) {
    ctx.throw(500, e);
  }
});

const checkPost: Middleware = async (ctx, next) => {
  const { id } = ctx.params;
  if (isNaN(id)) {
    ctx.status = 400;
    return;
  }
  try {
    const post = await Post.findById(id, {
      include: [User]
    });
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.state.post = post;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * read post
 * GET /api/posts/:id
 */
posts.get('/:id', checkPost, async ctx => {
  ctx.body = (ctx.state.post as Post).serialize();
});

/**
 * write comment
 * POST /api/posts/:id/comments
 * {
 *   text
 * }
 */
posts.post('/:id/comments', checkPost, needAuth, async ctx => {
  const validation = CommentSchema.validate(ctx.request.body);
  if (validation.error) {
    ctx.body = validation.error;
    ctx.status = 400;
    return;
  }
  const { post, user } = ctx.state as { post: Post; user: UserTokenData };
  const { text } = ctx.request.body as { text: string };
  const comment = new Comment({
    text,
    user_id: user.id,
    post_id: post.id
  });
  await Promise.all([comment.save(), comment.resolveUser()]);
  ctx.body = comment.serialize();
});

/**
 * get post comments
 * GET /api/posts/:id/comments
 */
posts.get('/:id/comments', ctx => {
  ctx.body = 'get post comments';
});

/**
 * delete post comment
 * DELETE /api/posts/:id/comments/:commentId
 */
posts.get('/:id/comments/:commentId', ctx => {
  ctx.body = 'delete post comment';
});

const checkOwnPost: Middleware = (ctx, next) => {
  const { post, user } = ctx.state as { post: Post; user: UserTokenData };
  if (post.user_id !== user.id) {
    ctx.status = 403;
    ctx.body = {
      name: 'NO_PERMISSION'
    };
    return;
  }
  return next();
};
/**
 * update post
 * PATCH /api/posts/:id
 */
posts.patch('/:id', needAuth, checkPost, checkOwnPost, async ctx => {
  const validation = PostSchema.validate(ctx.request.body);
  if (validation.error) {
    ctx.status = 400;
    ctx.body = validation.error;
    return;
  }
  const { title, body } = ctx.request.body as { title: string; body: string };
  const { post }: { post: Post } = ctx.state;
  const sanitized = sanitizeHtml(body, sanitizeOption);
  try {
    await post.update({
      title,
      body: sanitized
    });
    ctx.body = post.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
});

/**
 * delete post
 * DELETE /api/posts/:id
 */
posts.delete('/:id', needAuth, checkPost, checkOwnPost, async ctx => {
  const { post }: { post: Post } = ctx.state;
  try {
    await post.destroy();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
});

export default posts;
