const CharacterTraits = (connection, Sequelize, Characters, Traits) => {
  return connection.define('characterTraits', {
    characterId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: Characters, key: 'id' } },
    traitId: { type: Sequelize.STRING, primaryKey: true, references: { model: Traits, key: 'id' } }
  }, { paranoid: true })
}

module.exports = CharacterTraits
