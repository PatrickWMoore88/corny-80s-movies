'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorites = sequelize.define('favorites', {
    user_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {});
  favorites.associate = function(models) {
    // associations can be defined here
  };
  return favorites;
};