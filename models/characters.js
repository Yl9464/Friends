const Characters = (connection, Sequelize) => {
  return connection.define('characters',
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      bestQuote: { type: Sequelize.STRING },
      friendDescription: { type: Sequelize.STRING }
    },
    { paranoid: true })
}

module.exports = Characters
