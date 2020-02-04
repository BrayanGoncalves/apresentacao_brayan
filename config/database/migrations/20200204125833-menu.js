'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('menu', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      restaurante_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'restaurante', key: 'id' }, /* Essa é a forma de referenciar outra tabela, nesse caso numa relação OneToMany. Cria uma FK. */
        onUpdate: 'CASCADE', /* Diz o que irá acontecer com esse id caso o mesmo seja alterado na tabela restaurante. Com o CASCADE, o que for alterado na tabela pai, irá alterar aqui. */
        onDelete: 'CASCADE', /* Diz o que irá acontecer com esse id caso o mesmo seja excluído na tabela restaurante. Com o CASCADE, caso a tabela pai for excluída, a outra tabela relacionada também é excluída. */
                  /* SET NULL --> Assim que o restaurante for excluído, irá setar o restaurante_id como NULL */
                  /* RESTRICT --> Não deixa excluir o restaurante pois há vinculo com outras tabelas, nesse caso o Menu */
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('menu');
  }
};
