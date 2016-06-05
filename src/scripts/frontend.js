import { match } from './lib/router';
import routes from './routes';

import React from 'react';
import { render } from 'react-dom';

export default function application(url) {
  const matched = match(url, routes);
  render(<matched.handler />, document.getElementById('app'));
}
