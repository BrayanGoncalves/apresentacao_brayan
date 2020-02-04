'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'restaurante',
      'nome',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'restaurante',
      'nome'
    );
  }
};
