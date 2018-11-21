import { Middleware } from 'koa';
import { decodeToken } from '../common';

export const authMiddleware: Middleware = async (ctx, next) => {
  const token =
    ctx.request.headers.authorization && ctx.request.headers.authorization.replace('Bearer ', '');
  if (!token) {
    return next();
  }
  try {
    const decoded = await decodeToken<any>(token);
    ctx.state.user = decoded.user;
    return next();
  } catch (e) {
    return next();
  }
};
