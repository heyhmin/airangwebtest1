module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "password",
  DB: "testdb",
  // port: 3306,
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
