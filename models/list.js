"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      list.hasMany(models.item);
    }
  }
  list.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Todo List",
      },
      status: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "list",
    }
  );
  return list;
};
