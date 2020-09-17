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

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "fix bike",
          content: "ask the bike shop for type of tyre",
          listId: 1,
          done: false,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "buy groceries",
          content: "take recipe book from supermarket",
          listId: 1,
          done: false,

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
