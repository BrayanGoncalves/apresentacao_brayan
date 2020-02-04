const dbConnection  = require('../../config/database/dbConnection.js');
const sequelize     = require('sequelize');

let restauranteModel = dbConnection.define('restaurante', {
    nome: {
        type: sequelize.DataTypes.STRING,
        allowNull : false
    }
});

module.exports = restauranteModel;