import { NAVIGATE } from './constants';
import match from './match';

export default class Router {

  constructor(routes, dispatch) {
    this.routes = routes;
    this.dispatch = dispatch;
  }

  navigate(href) {
    const matched = match(href, this.routes);
    if (matched) {
      return this.dispatch(Promise.resolve({
        type: NAVIGATE,
        payload: {
          href
        }
      }));
    }
  }
}
