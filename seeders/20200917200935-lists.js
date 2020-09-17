"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "lists",
      [
        {
          name: "around the house",
          status: true,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "web project",
          status: true,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "work related",
          status: true,

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
    return await queryInterface.bulkDelete("lists", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
