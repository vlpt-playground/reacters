import Router from 'koa-router';
import { AuthSchema } from '../../lib/schemas';
import { hash, compareHash } from '../../lib/common';
import User from '../../models/User';

const auth = new Router();

/**
 * POST /auth/register
 * {
 *   username,
 *   password
 * }
 */
auth.post('/register', async ctx => {
  const result = AuthSchema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  try {
    const { username, password } = ctx.request.body as { username: string; password: string };

    // check username existancy
    const exists = await User.findOne({
      where: {
        username
      }
    });
    if (exists) {
      ctx.status = 409;
      return;
    }
    // hash password, save to db
    const hashed = await hash(password);
    const user = new User({
      username,
      password_hash: hashed
    });
    await user.save();
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    ctx.body = {
      access_token: accessToken,
      refresh_token: refreshToken,
      token_type: 'Bearer',
      expires_in: 60 * 60 * 24 * 7
    };
  } catch (e) {
    ctx.throw(500, e);
  }
});

/**
 * POST /auth/login
 * {
 *   username,
 *   password
 * }
 */
auth.post('/login', async ctx => {
  const result = AuthSchema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const { username, password } = ctx.request.body as { username: string; password: string };
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = compareHash(user.password_hash, password);
    if (!valid) {
      ctx.status = 401;
      return;
    }

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    ctx.body = {
      access_token: accessToken,
      refresh_token: refreshToken,
      token_type: 'Bearer',
      expires_in: 60 * 60 * 24 * 7
    };
  } catch (e) {
    ctx.throw(500, e);
  }
});

/**
 * GET /auth/check
 */
auth.get('/check', async ctx => {
  const { user } = ctx.state;
  if (!user) {
    ctx.status = 401;
    return;
  }
  ctx.body = user;
});

export default auth;
