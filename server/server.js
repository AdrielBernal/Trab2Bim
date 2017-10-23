const express        = require('express');
const config         = require('./app/config');
const bodyParser     = require('body-parser');
const app            = express();

const { Pool, Client } = require('pg')
const pool = new Pool({
  user: config.database.user,
  host: config.database.host,
  database: config.database.db,
  password: config.database.password,
  port: config.database.port,
})

// O pool vai dar um erro quando um cliente ficar muito tempo parado ou
// houver uma falha de rede.
pool.on('error', (err, client) => {
  console.error('Erro inesperado, cliente inativo.', err)
  process.exit(-1)
})

// bodyParser.urlencoded() interpreta o texto codificado dos formulários dos
// navegadores e transforma em json, na variável req.body.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routes')(app, pool);

app.listen(config.server.port, () => {
  console.log('Escutando porta ' + config.server.port);
});
