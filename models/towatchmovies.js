"use strict";
module.exports = (sequelize, DataTypes) => {
  const toWatchMovies = sequelize.define(
    "toWatchMovies",
    {
      user_id: DataTypes.INTEGER,
      movie_id: DataTypes.INTEGER
    },
    {}
  );
  toWatchMovies.associate = function(models) {
    // associations can be defined here
  };
  return toWatchMovies;
};
