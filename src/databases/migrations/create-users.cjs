"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: ["^[a-z0-9]+$", "i"],
          len: [2, 10],
          isAlphanumeric: true,
        },
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: ["^[a-z0-9]+$", "i"],
          len: [2, 20],
        },
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: ["^[a-z0-9]+$", "i"],
          len: [2, 20],
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      roleID: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
