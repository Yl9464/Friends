'use strict'

module.exports = {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('traits', [{
      trait: 'Caring'
    }, {
      trait: 'Energetic'
    }, {
      trait: 'Entitled'
    }, {
      trait: 'Funny'
    }, {
      trait: 'Jealous'
    }, {
      trait: 'OCD'
    }, {
      trait: 'Sad'
    }, {
      trait: 'Sarcastic'
    }, {
      trait: 'Narcissist'
    }, {
      trait: 'Supportive'
    }, {
      trait: 'Temperamental'
    },
    ])
  },


  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.bulkDelete('traits')
  }
}
