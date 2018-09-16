'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vehicleLicence: {
        type: Sequelize.STRING
      },
      vehicleRegister: {
        type: Sequelize.STRING
      },
      vehicleChassisVIN: {
        type: Sequelize.STRING
      },
      vehicleMake: {
        type: Sequelize.STRING
      },
      vehicleDiskExpireyDate: {
        type: Sequelize.DATE
      },
      fleetCardId: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Vehicles');
  }
};