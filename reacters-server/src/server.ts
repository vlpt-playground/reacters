require('dotenv').config();
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from './router';
import database from './database';
import { injectAuth } from './lib/middlewares/authMiddlewares';
import cors from './lib/middlewares/cors';
import historyFallback from './lib/middlewares/historyFallback';
import serve from 'koa-static';

class Server {
  app: Koa;
  constructor() {
    this.app = new Koa();
    this.setup();
  }
  setup() {
    // apply middlewares
    this.app.use(cors);
    this.app.use(bodyParser());
    this.app.use(injectAuth);
    // apply routes
    this.app.use(router.routes());
    this.app.use(router.allowedMethods());
    this.app.use(serve('./public'));
    this.app.use(historyFallback);
    // connect db
    database.authenticate();
  }
  run() {
    const port = process.env.PORT || 4000;
    this.app.listen(port, () => {
      console.log(`Server is listening to ${port}`);
    });
  }
}

export default Server;
