module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "123456",
      database: "election6",
    },
  },
  production: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "123456",
      database: "election6",
    },
  },
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
