import Router from 'koa-router';

const auth = new Router();

/**
 * POST /auth/register
 * {
 *   username,
 *   password
 * }
 */
auth.post('/register', ctx => {
  ctx.body = 'register';
});

/**
 * POST /auth/login
 * {
 *   username,
 *   password
 * }
 */
auth.post('/login', ctx => {
  ctx.body = 'login';
});

/**
 * GET /auth/check
 */

export default auth;
