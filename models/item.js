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
      title: { type: DataTypes.STRING, allowNull: false },
      content: DataTypes.STRING,
      listId: { type: DataTypes.INTEGER, allowNull: false },
      done: { type: DataTypes.BOOLEAN, defaultValue: false },
      icon: { type: DataTypes.INTEGER, defaultValue: 1, allowNull: false },
    },
    {
      sequelize,
      modelName: "item",
    }
  );
  return item;
};
