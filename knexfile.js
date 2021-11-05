const pgConnection = process.env.DATABASE_HACK_URL || {
  database: "dummy", //postgres by default
  user: "dummy", //postgres by default
  password: "dummy", //blank by default
};

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_CONN,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
