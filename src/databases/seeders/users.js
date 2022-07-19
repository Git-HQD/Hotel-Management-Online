"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        userName: "CustommerVip2",
        firstName: "Custommer",
        lastName: "Vip2",
        email: "CustommerVip2@gmail.com",
        password: "123456",
        address: "Da Nang",
        phone: "0905666999",
        roleID: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
