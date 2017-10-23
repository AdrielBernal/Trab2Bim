const alunoRoutes = require('./contato_routes');

module.exports = function(app, pool) {
  alunoRoutes(app, pool);
};
