'use strict'

module.exports = {
  async up(queryInterface,) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('characters', [{
      name: 'Rachel Green',
      bestQuote: 'No uterus, no opinion',
      characterGroup: 'Main Group'
    }, {
      name: 'Monica Geller',
      bestQuote: 'Welcome to the real world. It sucks. You are gonna love it.',
      characterGroup: 'Main Group'
    }, {
      name: 'Ross Geller',
      bestQuote: 'WE WERE ON A BREAK!',
      characterGroup: 'Main Group'
    }, {
      name: 'Phoebe Buffay',
      bestQuote: 'They dont know that we know they know we know!',
      characterGroup: 'Main Group'
    }, {
      name: 'Chandler Bing',
      bestQuote: 'Im hopeless and awkward and desperate for love!',
      characterGroup: 'Main Group'
    }, {
      name: 'Joey Tribbiani',
      bestQuote: 'So why dont you be a grown-up and come and watch some TV in the fort?',
      characterGroup: 'Main Group'
    }, {
      name: 'Janice Hosenstein',
      bestQuote: 'Im riding the alimony pony!',
      characterGroup: 'Minor characters'
    }, {
      name: 'Mike Hanagan',
      bestQuote: 'I know this is gonna sound crazy but we could not let the box of rats ruin our lives.',
      characterGroup: 'Minor characters'
    }, {
      name: 'Gunther',
      bestQuote: 'Thanks for not marrying Rachel.',
      characterGroup: 'Minor characters'
    }, {
      name: 'Ursala Buffay',
      bestQuote: 'Hurry up! I gotta pray!',
      characterGroup: 'Minor characters'
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
    return queryInterface.bulkDelete('characters')
  }
}
