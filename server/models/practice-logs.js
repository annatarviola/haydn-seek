const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database");

module.exports = {
  Log: sequelize.define("log", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    date: DataTypes.DATEONLY,
    quality: DataTypes.STRING,
    time_hr: DataTypes.INTEGER,
    time_min: DataTypes.INTEGER,
    scales: DataTypes.STRING,
    exercises: DataTypes.STRING,
    repertoire: DataTypes.STRING,
    notes: DataTypes.TEXT,
  }),
};
