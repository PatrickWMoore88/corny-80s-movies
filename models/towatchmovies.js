'use strict';
module.exports = (sequelize, DataTypes) => {
  const toWatchMovies = sequelize.define('toWatchMovies', {
    user_Id: DataTypes.INTEGER,
    movie_Id: DataTypes.INTEGER
  }, {});
  toWatchMovies.associate = function(models) {
    // associations can be defined here
  };
  return toWatchMovies;
};