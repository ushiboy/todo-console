import { createServer } from './lib';
import routes from './routes';

createServer(routes).listen(3001);
