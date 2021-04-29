module.exports = {
  HOST: "us-cdbr-east-03.cleardb.com", // "localhost",
  USER: "b17cce34dcf60b", // "root",
  PASSWORD: "84821639", // "password",
  DB: "heroku_1ce2bcdd3d0a666", // "testdb",
  port: 3306,
  charset: 'utf8',
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
        socketPath: "/var/run/mysqld/mysqld.sock"
  },
  define: {
      paranoid: true
  }
};
