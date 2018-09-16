'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    vehicleLicence: DataTypes.STRING,
    vehicleRegister: DataTypes.STRING,
    vehicleChassisVIN: DataTypes.STRING,
    vehicleMake: DataTypes.STRING,
    vehicleDiskExpireyDate: DataTypes.DATE,
    fleetCardId: DataTypes.INTEGER
  }, {});
  Vehicle.associate = function(models) {
    // associations can be defined here
  };
  return Vehicle;
};