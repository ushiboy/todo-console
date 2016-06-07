import { NAVIGATE } from './constants';
import match from './match';

export default class Router {

  constructor(routes, dispatch) {
    this.routes = routes;
    this.dispatch = dispatch;

    this.handlers = routes.reduce((handlers, route) => {
      const { path, handler } = route;
      handlers[path] = handler;
      return handlers;
    }, {});
  }

  navigate(href) {
    const matched = match(href, this.routes);
    if (matched) {
      const { path, action } = matched;
      this.dispatch(Promise.resolve({
        type: NAVIGATE,
        payload: {
          href,
          path
        }
      }));
      if (action) {
        this.dispatch(action());
      }
    }
  }

  findHandler(path) {
    return this.handlers[path];
  }

}
