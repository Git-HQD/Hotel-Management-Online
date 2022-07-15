'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      userName: 'userTest1',
      firstName: 'user',
      lastName: 'Test1',
      email: 'userTest1@example.com',
      password: '12345',
      address: 'Wall',
      phone: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
