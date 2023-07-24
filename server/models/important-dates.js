const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database");

module.exports = {
  Date: sequelize.define("date", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    description: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME
  }),
};
