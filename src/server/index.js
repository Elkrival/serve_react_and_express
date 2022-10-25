const express = require('express')
const path = require('path')
const app = express()
const data = require('./MOCK_DATA.json')

app.use(express.static('dist'))
app.get('/api/data', async (req, res) => {
  return res.json(data)
})

app.get('/*', async (req, res) => {
  return res.sendFile(
    path.join(__dirname, '..', 'my-app', 'build', 'index.html')
  )
})

app.listen(9000)
