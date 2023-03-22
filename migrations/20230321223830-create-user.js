'use strict';

const { TEXT } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      urlEndpoint: {
        type: Sequelize.TEXT,
        allowNull:false,
        unique:true
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      birthdayDate: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      whatsappNumber: {
        type: Sequelize.STRING,
        allowNull:false
      },
      homeTown: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      lastEducation: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      photo: {
        type: Sequelize.ARRAY(TEXT),
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};