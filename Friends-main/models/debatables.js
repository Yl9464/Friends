const Debatables = (connection, Sequelize) => {
  return connection.define('debatables', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    topic: { type: Sequelize.STRING },
    opinion: { type: Sequelize.ENUM('Yes', 'No') },
    reason: { type: Sequelize.STRING }
  }, { paranoid: true })
}

module.exports = Debatables
