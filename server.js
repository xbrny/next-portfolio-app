const next = require('next');
const express = require('express');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    const server = express();

    // server.get('/portfolios/:id', (req, res) => {
    //   app.render(req, res, '/portfolios', { id: req.params.id });
    // });

    // server.get('*', (req, res) => {
    //   return handler(req, res);
    // });

    server.use(handler);

    server.listen(3000, () => console.log(`Running on port 3000`));
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });
