const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('cadena', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }
  })
}