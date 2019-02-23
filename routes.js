const routes = require('next-routes')

module.exports = routes()
  .add('/portfolios/:id', 'portfolios')