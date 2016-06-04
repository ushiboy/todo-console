import { route } from './lib/router';

import Index from './views/Index';
import About from './views/About';

const routes = [
  route('/', Index),
  route('/about', About)
];

export default routes;
