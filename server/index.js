require('dotenv').config({path: __dirname + '/config/.env'})
const cors = require('cors')
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

// Requiring Routes
const userRoutes = require('./routes/user')
// const scriptRoutes = require('./routes/scripts')

const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection-error:'))
db.once('open', function () {
  console.log('Connection Established')
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// Routes
app.use('/user', userRoutes)
// app.use('/scripts', scriptRoutes)

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
