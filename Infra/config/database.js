const localDatabase = {
  host: 'postgres',
  database: 'teravoz',
  username: 'root',
  password: 'password',
  port: 5432,
  seederStorage: 'sequelize',
  logging: console.log,
  dialect: 'postgres'
}

const remoteDatabase = {
  host: process.env.TERAVOZ_DATABASE_HOST,
  database: process.env.TERAVOZ_DATABASE_NAME,
  username: process.env.TERAVOZ_DATABASE_USERNAME,
  password: process.env.TERAVOZ_DATABASE_PASSWORD,
  port: process.env.TERAVOZ_DATABASE_PORT,
  seederStorage: 'sequelize',
  logging: () => {},
  dialect: 'postgres'
}

const database = {
  development: localDatabase,
  production: remoteDatabase
}

module.exports = database[require('./environment')]
