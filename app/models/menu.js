const dbConnection      = require('../../config/database/dbConnection.js');
const sequelize         = require('sequelize');

const menuModel = dbConnection.define('menu', {
    nome: {
        type: sequelize.DataTypes.STRING,
        allowNull : false
    }
});

/* Abaixo está sendo feita a associação da FK restaurante_id com a tabela restaurante, onde a associação foi nomeada de 'restaurante' (pode ter qualquer nome) */
menuModel.associate = function(model) {
    menuModel.belongsTo(model, { 
        foreignKey: 'restaurante_id', 
        as: 'restaurante' 
    });
}

module.exports = menuModel;