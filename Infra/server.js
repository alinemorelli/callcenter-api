require('dotenv').config()

const express = require('express')
const apiConfig = require('./config/api')
const initDatabase = require('./api/init/database')
const cors = require('cors')

initDatabase()
  .then(_ => {
    const app = express()
    app.use(express.json())
    app.use(cors())

    app.use(require('./api/routes'))

    app.listen({ port: apiConfig.port },
      _ => console.log(`API running on port ${apiConfig.port}...`))
  })
