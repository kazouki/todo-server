"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "items",
      [
        {
          title: "wash clothe",
          content: "bring money for the machine",
          listId: 1,
          done: false,
          icon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "fix bike",
          content: "ask the bike shop for type of tyre",
          listId: 1,
          done: false,
          icon: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "buy groceries",
          content: "take recipe book from supermarket",
          listId: 1,
          done: false,
          icon: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "add state management",
          content: "decide whether to use redux or context",
          listId: 3,
          done: false,
          icon: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "replace laptop battery",
          content: "find the best price of all the dealers",
          listId: 3,
          done: false,
          icon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "solve the ref warnings",
          content: "checkout all the stackoverflow stuff on ref warnings",
          listId: 3,
          done: false,
          icon: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "deploy on AWS",
          content: "find the best documentation for manual setup",
          listId: 2,
          done: false,
          icon: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("items", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
