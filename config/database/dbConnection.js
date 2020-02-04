const sequelize     = require('sequelize');
const dbConfig      = require('./dbConfig.js')
const connSequelize = new sequelize(dbConfig);

module.exports = connSequelize;