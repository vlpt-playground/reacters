import { Middleware } from 'koa';
import path from 'path';
import fs from 'fs';

const indexHtml = fs.readFileSync(path.resolve('./public/index.html'), 'utf8');
console.log(indexHtml);

const historyFallback: Middleware = async (ctx, next) => {
  if (ctx.status === 404) {
    ctx.body = indexHtml;
  }
};

export default historyFallback;
