'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class taskQueue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  taskQueue.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    priority: {
      type:DataTypes.ENUM,
      values:['low','medium','high','critical'],
      defaultValue:'low'
    },
    status:{
      type:DataTypes.ENUM,
      values:['pending','in_progress','completed'],
      defaultValue:'pending'
    },
    due_date: {
      type:DataTypes.DATE
    },
    estimated_hours: {
      type:DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'taskQueue',
  });
  return taskQueue;
};