/* eslint-disable no-console */
const models = require('../models')


const getAllRecords = async (request, response) => {
  try {
    const characters = await models.Characters.findAll({
      attributes: ['name', 'bestQuote', 'characterGroup'],
      include: [
        {
          model: models.Traits,
          attributes: ['trait']
        },
      ],
    })

    return response.send(characters)
  } catch (error) {
    return response.status(500).send('Cannot retrieve characters...')
  }
}


const getCharacterByName = async (request, response) => {
  try {
    const { name } = request.params

    const characterName = await models.Characters.findOne({
      where: { name: { [models.Op.like]: `%${name}%` } },
      attributes: ['name', 'characterGroup'],
      include: [
        {
          model: models.Traits,
          attributes: ['trait'],
        },
      ],
    })

    return characterName
      ? response.send(characterName)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(404).send('Cannot retrieve characters name...')
  }
}

const savedCharacter = async (request, response) => {
  try {
    const {
      name, bestQuote, characterGroup
    } = request.body

    if (!name || !bestQuote || !characterGroup) {
      return response.status(400).send('Missing field')
    }

    const newCharacter = await models.Characters.create({
      name, bestQuote, characterGroup,
    })

    return response.status(200).send(newCharacter)
  } catch (error) {
    return response.status(500).send('Cannot save new character')
  }
}


module.exports = {
  getAllRecords,
  getCharacterByName,
  savedCharacter,
}
