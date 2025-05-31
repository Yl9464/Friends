const Traits = (connection, Sequelize) => {
  return connection.define('traits', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    trait: { type: Sequelize.STRING }
  }, { paranoid: true })
}

module.exports = Traits
