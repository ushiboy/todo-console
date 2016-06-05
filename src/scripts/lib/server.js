import connect from 'connect';
import http from 'http';

export function createServer(application) {
  const app = connect();
  app.use('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    const [html, statusCode] = application(req);
    res.end(html, statusCode);
  });
  return http.createServer(app);
}
