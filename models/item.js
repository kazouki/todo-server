"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      item.belongsTo(models.list);
    }
  }
  item.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      listId: DataTypes.INTEGER,
      done: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "item",
    }
  );
  return item;
};
