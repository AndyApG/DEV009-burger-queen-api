const mongoose = require('mongoose');
const config = require('./config');

// eslint-disable-next-line no-unused-vars
const { dbUrl } = config;

function connect() {
  return new Promise((resolve, reject) => {
    mongoose.connect(dbUrl)
      .then((db) => resolve('Conexion a la base de datos'))
      .catch((err) => reject(err));
  })

  // TODO: Conexión a la Base de Datos

}
module.exports = { connect };
