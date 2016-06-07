import { Router } from './lib/router';
import routes from './routes';

import React from 'react';
import { renderToString } from 'react-dom/server';


export default function application(request) {
  const { url, headers } = request;
  const router = new Router(routes, promise => {

  });

  router.navigate(url);
  if (matched) {
    return [index(renderToString(<matched.handler />)), 200];
  }
  return ['Not Found', 404];
}

function index(mainView) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Extreme Todo</title>
</head>
<body>
<div id="app">${mainView}</div>
</body>
</html>`;
}
