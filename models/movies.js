'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    title: DataTypes.TEXT,
    year: DataTypes.INTEGER,
    social_rating: DataTypes.STRING,
    movie_rating: DataTypes.CHAR
  }, {});
  movies.associate = function(models) {
    // associations can be defined here
  };
  return movies;
};