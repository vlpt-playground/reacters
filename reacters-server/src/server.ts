require('dotenv').config();
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from './router';
import database from './database';
import User from './models/User';
import { authMiddleware } from './lib/middlewares/authMiddleware';

class Server {
  app: Koa;
  constructor() {
    this.app = new Koa();
    this.setup();
  }
  setup() {
    // apply middlewares
    this.app.use(bodyParser());
    this.app.use(authMiddleware);
    // apply routes
    this.app.use(router.routes());
    this.app.use(router.allowedMethods());
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
