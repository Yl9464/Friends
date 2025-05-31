const models = require('../models')

const getAllDebates = async (request, response) => {
  try {
    const debates = await models.Debatables.findAll({
      attributes: ['topic', 'opinion', 'reason']
    })

    return response.send(debates)
  } catch (error) {
    response.status(500).send('Cannot retrieve topics')
  }
}

const getDebateByTopic = async (request, response) => {
  try {
    const { topic } = request.params

    const debatableTopic = await models.Debatables.findOne({
      where: { topic: { [models.Op.like]: `%${topic}%` } },
      attributes: ['topic', 'opinion', 'reason'],
    })

    return debatableTopic
      ? response.send(debatableTopic)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(400).send('Cannot retrieve topic...')
  }
}


module.exports = {
  getAllDebates,
  getDebateByTopic,
}
