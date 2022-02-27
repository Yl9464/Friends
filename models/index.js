const Sequelize = require('sequelize')
const CharactersModel = require('./characters')
const TraitsModel = require('./traits')
const CharacterTraitsModel = require('./characterTraits')
const DebatablesModel = require('./debatables')

const allConfigs = require('../configs/sequelize')

const environment = process.env.NOVE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Characters = CharactersModel(connection, Sequelize)
const Traits = TraitsModel(connection, Sequelize)
const CharacterTraits = CharacterTraitsModel(connection, Sequelize, Characters, Traits)
const Debatables = DebatablesModel(connection, Sequelize)

Characters.belongsToMany(Traits, { through: CharacterTraits })
Traits.belongsToMany(Characters, { through: CharacterTraits })

module.exports = {
  Characters,
  Traits,
  CharacterTraits,
  Debatables,
  Op: Sequelize.Op
}
