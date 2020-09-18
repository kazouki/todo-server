"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: { type: Sequelize.STRING, allowNull: false },
      content: Sequelize.STRING,
      listId: { type: Sequelize.INTEGER, allowNull: false },
      done: { type: Sequelize.BOOLEAN, defaultValue: false },
      icon: { type: Sequelize.INTEGER, defaultValue: 1, allowNull: false },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("items");
  },
};
