const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const cors = require('cors')

const app = express()

app.use(serveStatic(path.join(__dirname, 'dist')))
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Access-Control-Allow-Origin']
}))

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Listen at port ${port}`)
})
