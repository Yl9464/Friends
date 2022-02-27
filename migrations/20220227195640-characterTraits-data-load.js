'use strict'

module.exports = {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('characterTraits', [{
      characterId: 1,
      traitId: 3
    }, {
      characterId: 1,
      traitId: 5
    }, {
      characterId: 1,
      traitId: 9
    }, {
      characterId: 2,
      traitId: 6
    }, {
      characterId: 2,
      traitId: 9
    }, {
      characterId: 2,
      traitId: 11
    }, {
      characterId: 3,
      traitId: 1
    }, {
      characterId: 3,
      traitId: 5
    }, {
      characterId: 3,
      traitId: 11
    }, {
      characterId: 4,
      traitId: 1
    }, {
      characterId: 4,
      traitId: 4
    }, {
      characterId: 4,
      traitId: 10
    }, {
      characterId: 5,
      traitId: 4
    }, {
      characterId: 5,
      traitId: 8
    }, {
      characterId: 5,
      traitId: 10
    }, {
      characterId: 6,
      traitId: 1
    }, {
      characterId: 6,
      traitId: 4
    }, {
      characterId: 6,
      traitId: 10
    }, {
      characterId: 7,
      traitId: 1
    }, {
      characterId: 7,
      traitId: 2
    }, {
      characterId: 7,
      traitId: 4
    }, {
      characterId: 8,
      traitId: 4
    }, {
      characterId: 8,
      traitId: 8
    }, {
      characterId: 8,
      traitId: 10
    }, {
      characterId: 9,
      traitId: 5
    }, {
      characterId: 9,
      traitId: 7
    }, {
      characterId: 9,
      traitId: 11
    }, {
      characterId: 10,
      traitId: 3
    }, {
      characterId: 10,
      traitId: 9
    }, {
      characterId: 10,
      traitId: 11
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
    return queryInterface.bulkDelete('characterTraits')
  }
}
