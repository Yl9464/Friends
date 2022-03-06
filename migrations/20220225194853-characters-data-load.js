/* eslint-disable max-len */
'use strict'

module.exports = {
  async up(queryInterface,) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('characters', [
      {
        name: 'Rachel Green',
        bestQuote: 'No uterus, no opinion',
        friendDescription: 'Rachel is the worst Friend in the group. With realtionships she acts like a toddler, not interested in soemthing until someone else is. I hate Rachel, but love Jennifer Aniston.',
      },
      {
        name: 'Monica Geller',
        bestQuote: 'Welcome to the real world. It sucks. You are gonna love it.',
        friendDescription: 'Monica is very OCD and controlling. Given her family dynamic its understandable and I feel bad for her. She is caring and giving and is an overall good person.',
      },
      {
        name: 'Ross Geller',
        bestQuote: 'WE WERE ON A BREAK!',
        friendDescription: 'Ross made some stupid decisions in the series, but overall was a decent guy. He was a dependable person and does not deserve all the hate his character gets.',
      },
      {
        name: 'Phoebe Buffay',
        bestQuote: 'They dont know that we know they know we know!',
        friendDescription: 'I love Phoebe as a character but would hate her as a person IRL. I admire her confidence and strength, but her flakyness and attitude would anger me in person.',
      },
      {
        name: 'Chandler Bing',
        bestQuote: 'Im hopeless and awkward and desperate for love!',
        friendDescription: 'If Chandler was a real person I would have such a big crush on him! He is funny, sarcastic, and mostly dependable. Hes the total package!',
      },
      {
        name: 'Joey Tribbiani',
        bestQuote: 'So why dont you be a grown-up and come and watch some TV in the fort?',
        friendDescription: 'Joey can be a jerk to women at times, but his over all loyalty to the group is admirable. His character got a crap ending, he should have found love and had a nice future implied like everyone else did.',
      },
      {
        name: 'Janice Hosenstein',
        bestQuote: 'Im riding the alimony pony!',
        friendDescription: 'Janice was a good person. I feel bad for how the Friends treated her, she deserved much better from the group. I am glad she found someone she loved and who loved her in the end.',
      },
      {
        name: 'Mike Hanagan',
        bestQuote: 'I know this is gonna sound crazy but we could not let the box of rats ruin our lives.',
        friendDescription: 'I love Mike, only because I want to marry Paul Rudd!',
      },
      {
        name: 'Gunther',
        bestQuote: 'Thanks for not marrying Rachel.',
        friendDescription: 'Gunther is pretty meeeeeh... his crush on Rachel was weird and obsessive at times. Not sure where I stand on him. It was sad when the actor passed away a bit a go, he seemed nice.',
      },
      {
        name: 'Ursala Buffay',
        bestQuote: 'Hurry up! I gotta pray!',
        friendDescription: 'Ursala is a real jerk, but if I grew up with her childhood I would probably be the same way or worse...',
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
