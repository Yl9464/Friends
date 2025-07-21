const Sequelize = require('sequelize')
const CharactersModel = require('./characters')
const DebatablesModel = require('./debatables')

const allConfigs = require('../configs/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Characters = CharactersModel(connection, Sequelize)
const Debatables = DebatablesModel(connection, Sequelize)

module.exports = {
  Characters,
  Debatables,
  Op: Sequelize.Op
}
