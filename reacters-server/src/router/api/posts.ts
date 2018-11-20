import Router from 'koa-router';

const posts = new Router();

/**
 * write post
 * POST /api/posts
 * {
 *   title,
 *   body
 * }
 */
posts.post('/', ctx => {
  ctx.body = 'write post';
});

/**
 * list posts
 * GET /api/posts
 */
posts.get('/', ctx => {
  ctx.body = 'list posts';
});

/**
 * read post
 * GET /api/posts/:id
 */
posts.get('/:id', ctx => {
  ctx.body = 'read post';
});

/**
 * write comment
 * POST /api/posts/:id/comments
 * {
 *   text
 * }
 */
posts.post('/:id/comments', ctx => {
  ctx.body = 'write comments';
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

/**
 * update post
 * PATCH /api/posts/:id
 */
posts.patch('/:id', ctx => {
  ctx.body = 'update post';
});

/**
 * delete post
 * DELETE /api/posts/:id
 */
posts.delete('/:id', ctx => {
  ctx.body = 'delete post';
});

export default posts;
