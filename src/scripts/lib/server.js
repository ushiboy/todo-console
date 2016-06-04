import connect from 'connect';
import http from 'http';
import { match } from './router';
import React from 'react';
import { renderToString } from 'react-dom/server';

export function createServer(routes) {
  const app = connect();
  app.use('/', (req, res) => {
    const { url, headers } = req;
    const matched = match(url, routes);
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    if (matched) {
      const html = renderToString(<matched.handler />);
      res.end(html);
    } else {
      res.end('Not Found', 404);
    }
  });
  return http.createServer(app);
}
