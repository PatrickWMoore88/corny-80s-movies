'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    title: DataTypes.TEXT,
    year: DataTypes.INTEGER,
    socialRating: DataTypes.DOUBLE,
    movieRating: DataTypes.CHAR
  }, {});
  movies.associate = function(models) {
    // associations can be defined here
  };
  return movies;
};