import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';
import { createStore, applyMiddleware } from 'redux';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';

const statsFile = path.resolve('./build/loadable-stats.json');

const app = express();

function createPage(rootHtml, { script, style, link }) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="/manifest.json" />
      <title>React App</title>
      ${style}
      ${link}
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${rootHtml}</div>
      ${script}
    </body>
  </html>
  `;
}

async function serverRender(req, res) {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const context = {};
  const extractor = new ChunkExtractor({ statsFile });
  const jsx = extractor.collectChunks(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const rendered = ReactDOMServer.renderToString(jsx);
  const collected = {
    script: extractor.getScriptTags(),
    link: extractor.getLinkTags(),
    style: extractor.getStyleTags()
  };
  const page = createPage(rendered, collected);
  res.send(page);
}

app.get('/', serverRender);
app.use(express.static(path.resolve(__dirname, '../build')));
app.use((req, res, next) => {
  if (!req.route) {
    return serverRender(req, res);
  }
  return next();
});

app.listen(5000, () => {
  console.log('Running on http://localhost:5000');
});

console.log('hello!');
