import { Middleware } from 'koa';

const cors: Middleware = (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.headers.origin || 'localhost:4000');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  ctx.set(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
  );
  return next();
};

export default cors;
