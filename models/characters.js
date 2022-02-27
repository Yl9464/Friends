const Characters = (connection, Sequelize) => {
  return connection.define('characters',
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      bestQuote: { type: Sequelize.STRING },
      characterGroup: {
        type: Sequelize.ENUM('Main group', 'Minor characters'),
      },
    },
    { paranoid: true })
}

module.exports = Characters
