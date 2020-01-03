module.exports = {
  development: {
    username: "postgres",
    password: null,
    database: "corny_80s_movies",
    host: "127.0.0.1",
    dialect: "postgres"
  },

  production: {
    url: process.env.DB_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: "postgres"
  }
};
