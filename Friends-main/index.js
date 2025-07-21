/* eslint-disable max-len */
/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const { getAllRecords, getCharacterByName, savedCharacter } = require('./controllers/characters')
const { getAllDebates, getDebateByTopic } = require('./controllers/debatables')

const app = express()

app.use(express.static('client/build'))
app.use(cors())

app.get('/api/characters', getAllRecords)
app.get('/api/characters/:name', getCharacterByName)
app.post('/api/characters', bodyParser.json(), savedCharacter)
app.get('/api/debate', getAllDebates)
app.get('/api/debate/:topic', getDebateByTopic)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build')))
app.listen(1341, () => {
  console.log('Listening on port 1341...')
})
