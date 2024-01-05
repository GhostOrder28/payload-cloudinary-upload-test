import express from 'express'
import payload from 'payload'
import { mediaManagement } from "payload-cloudinary-plugin";
import { config, options } from './cloudinary/cloudinary';

require('dotenv').config()
const app = express()

app.use(mediaManagement(config, options));

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3000)
}

start()
