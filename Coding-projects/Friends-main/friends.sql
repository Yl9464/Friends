CREATE DATABASE friends;

DROP USER 'friends'@'localhost';
FLUSH PRIVILEGES;
CREATE USER 'friends'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'fri3nd$Db';
GRANT ALL ON friends.* TO 'friends'@'localhost';

USE friends;
CREATE TABLE characters(
id INT auto_increment,
name VARCHAR(255),
bestQuote VARCHAR(255),
friendgroup VARCHAR(255),
friendDescription MEDIUMTEXT,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (id)
);

USE friends;
CREATE TABLE debatables(
id INT auto_increment,
topic VARCHAR (255),
opinion ENUM ('Yes', 'No'),
reason MEDIUMTEXT,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (id)
);

INSERT INTO characters (name, bestQuote, friendgroup, friendDescription) VALUES('Rachel Green', 'No uterus, no opinion', 'Main Group', 'Rachel is the worst Friend in the group. With realtionships she acts like a toddler, not interested in soemthing until someone else is. I hate Rachel, but love Jennifer Aniston.');
INSERT INTO characters (name, bestQuote, friendgroup, friendDescription) VALUES('Monica Geller', 'Welcome to the real world. It sucks. You are gonna love it.', 'Main Group', 'Monica is very OCD and controlling. Given her family dynamic its understandable and I feel bad for her. She is caring and giving and is an overall good person.');
INSERT INTO characters (name, bestQuote, friendgroup, friendDescription) VALUES('Ross Geller', 'WE WERE ON A BREAK!', 'Main Group', 'Ross made some stupid decisions in the series, but overall was a decent guy. He was a dependable person and does not deserve all the hate his character gets.');
INSERT INTO characters (name, bestQuote, friendgroup, friendDescription) VALUES('Phoebe Buffay', 'They dont know that we know they know we know!', 'Main Group', 'I love Phoebe as a character but would hate her as a person IRL. I admire her confidence and strength, but her flakyness and attitude would anger me in person.');
INSERT INTO characters (name, bestQuote, friendgroup, friendDescription) VALUES('Chandler Bing', 'Im hopeless and awkward and desperate for love!', 'Main Group', 'If Chandler was a real person I would have such a big crush on him! He is funny, sarcastic, and mostly dependable. Hes the total package!' );
INSERT INTO characters (name, bestQuote, friendgroup, friendDescription) VALUES('Joey Tribbiani', 'So why dont you be a grown-up and come and watch some TV in the fort?', 'Main Group', 'Joey can be a jerk to women at times, but his over all loyalty to the group is admirable. His character got a crap ending, he should have found love and had a nice future implied like everyone else did.');
INSERT INTO characters (name, bestQuote, friendgroup, friendDescription) VALUES('Janice Hosenstein', 'Im riding the alimony pony!', 'Minor characters', 'Janice is a good person. I feel bad for how the Friends treated her, she deserved much better from the group. I am glad she found someone she loved and who loved her in the end.' );
INSERT INTO characters (name, bestQuote, friendgroup, friendDescription) VALUES('Mike Hanagan', 'I know this is gonna sound crazy but we could not let the box of rats ruin our lives.', 'Minor characters', 'I love Mike, but only because I want to marry Paul Rudd!');
INSERT INTO characters (name, bestQuote, friendgroup, friendDescription) VALUES('Gunther', 'Thanks for not marrying Rachel', 'Minor characters', 'Gunther is pretty meeeeeh... his crush on Rachel was weird and obsessive at times. Not sure where I stand on him. It was sad when the actor passed away a bit a go, he seemed nice.');
INSERT INTO characters (name, bestQuote, friendgroup, friendDescription) VALUES('Ursala Buffay', 'Hurry up! I gotta pray!', 'Minor characters', 'Ursala is a real jerk, but if I grew up with her childhood I would probably be the same way or worse...');

INSERT INTO debatables(topic, opinion, reason) VALUES ('Were Ross and Rachel on a break?', 'Yes', 'Rachel wanted a break becuase Ross was jealous and controlling. She had a good reason to call a break and Ross made a bad move sleeping someone right off the bat. However he had the prerogative to do so since, THEY WERE ON A BREAK!');
INSERT INTO debatables(topic, opinion, reason) VALUES ('Should Joey and Phoebe have dated?', 'No', 'They had a good dynamic that would have been ruined if they dated and broke up.');
INSERT INTO debatables(topic, opinion, reason) VALUES ('Was Janice really as bad as the group said she was?', 'No', 'She had an annoying laugh and voice, but she was a genuinely good person. She cared about Chandler and the entire group despite their bullying behaviors.');
INSERT INTO debatables(topic, opinion, reason) VALUES ('Were Rachel and Joey a good couple?', 'Yes', 'I dont think they were endgame, but they would have been a good couple for a season or two. Joey cared about Rachel for the women she grew into, not the high-school girl she once was.');
INSERT INTO debatables(topic, opinion, reason) VALUES ('Was there a best "Friend"?', 'Yes', 'Joey! He was a womenizing jerk at times, but he was a good friend and overall person. All the characters had their flaws, but Joey was there for everyone not matter what. He was caring, understanding, and forgiving.')