import application from './backend';
import { createServer } from './lib';

createServer(application).listen(3001);
console.log('http://localhost:3001');
