const sequelize     = require('sequelize');
const dbConfig      = require('../config/dbConfig.js')
const connSequelize = new sequelize(dbConfig);

module.exports = connSequelize;