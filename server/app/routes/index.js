const contatoRoutes = require('./contato_routes');

module.exports = function(app, pool) {
  contatoRoutes(app, pool);
};
