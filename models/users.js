'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    user_name: DataTypes.TEXT,
    password: DataTypes.TEXT,
    fav_Id: DataTypes.INTEGER,
    toWatch_Id: DataTypes.INTEGER
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};