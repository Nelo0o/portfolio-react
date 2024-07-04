'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('projects', 'title', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Mon projet'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('projects', 'title'); 
  }
};
