import React from 'react';
import { match } from './router';

export default class Application {

  constructor(routes) {

    this.routes = routes;
  }

  dispatch(request) {
    const { url, headers } = request;
    const matched = match(url, this.routes);

  }

}
