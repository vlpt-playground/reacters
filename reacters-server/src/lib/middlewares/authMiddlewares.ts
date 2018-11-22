import { Middleware } from 'koa';
import { decodeToken } from '../common';

export const injectAuth: Middleware = async (ctx, next) => {
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

export const needAuth: Middleware = (ctx, next) => {
  const { user } = ctx.state;
  if (!user) {
    ctx.status = 401;
    ctx.body = {
      name: 'INVALID_TOKEN'
    };
    return;
  }
  return next();
};
