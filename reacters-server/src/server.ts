require('dotenv').config();
import Koa from 'koa';
import router from './router';

class Server {
  app: Koa;
  constructor() {
    this.app = new Koa();
    this.setup();
  }
  setup() {
    // apply routes
    this.app.use(router.routes());
    this.app.use(router.allowedMethods());
  }
  run() {
    const port = process.env.PORT || 4000;
    this.app.listen(port, () => {
      console.log(`Server is listening to ${port}`);
    });
  }
}

export default Server;
