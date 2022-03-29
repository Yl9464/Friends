/* eslint-disable max-len */
'use strict'

module.exports = {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('debatables', [{
      topic: 'Were Ross and Rachel on a break?',
      opinion: 'Yes',
      reason: 'Rachel wanted a break due to Ross being jealous and controlling. Rachel had a good reason to call a break and Ross made a bad move sleeping someone right off the bat. However he had the prerogative to do so since, THEY WERE ON A BREAK!'
    },
    {
      topic: 'Should Joey and Phoebe have dated?',
      opinion: 'No',
      reason: 'They had a good dynamic that would have been ruined if they dated and broke up.'
    },
    {
      topic: 'Was Janice really as bad as the group said she was?',
      opinion: 'No',
      reason: 'She had an annoying laugh and voice, but she was a genuinely good person. She cared about Chandler and the entire group despite their bullying behaviors.'
    },
    {
      topic: 'Were Rachel and Joey a good couple?',
      opinion: 'Yes',
      reason: 'I dont think they were endgame, but they would have been a good couple for a season or two. Joey cared about Rachel for the women she grew into, not the high-school girl she once was.'
    },
    {
      topic: 'Was there a best "Friend"?',
      opinion: 'Yes',
      reason: 'Joey! He was a womenizing jerk at times, but he was a good friend and overall person. All the characters had their flaws, but Joey was there for everyone not matter what. He was caring, understanding, and forgiving.'
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
    return queryInterface.bulkDelete('debatables')
  }
}
