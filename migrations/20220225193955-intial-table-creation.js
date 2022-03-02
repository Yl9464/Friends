'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('characters', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      bestQuote: { type: Sequelize.STRING },
      characterGroup: { type: Sequelize.ENUM('Main group', 'Minor characters') },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
    await queryInterface.createTable('traits', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      trait: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
    await queryInterface.createTable('characterTraits', {
      characterId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'characters', key: 'id' } },
      traitId: { type: Sequelize.STRING, primaryKey: true, reference: { model: 'traits', key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
    await queryInterface.createTable('debatables', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      topic: { type: Sequelize.STRING },
      opinion: { type: Sequelize.ENUM('Yes', 'No') },
      reason: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
  },


  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('characters', 'traits', 'characterTraits', 'debatables')
  }
}
