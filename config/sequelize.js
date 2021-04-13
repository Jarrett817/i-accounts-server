'use strict';
const local = require('./config.default');
const prod = require('./config.prod');

module.exports = {
  development: local.sequelize,
  production: prod.sequelize,
};
