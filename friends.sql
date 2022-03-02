CREATE DATABASE friends;

CREATE USER 'friends'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Fr1nd$!';
GRANT ALL ON friends.* TO 'friends'@'localhost';

USE friends;
CREATE TABLE characters(
id INT auto_increment,
name VARCHAR(255),
bestQuote VARCHAR(255),
characterGroup ENUM ('Main group', 'Minor characters'),
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (id)
);

CREATE TABLE traits(
id INT auto_increment,
trait VARCHAR (255),
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (id)
);


CREATE TABLE characterTraits(
characterId INT,
traitId INT,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (characterId, traitId),
FOREIGN KEY(characterId) REFERENCES characters(id),
FOREIGN KEY(traitId) REFERENCES traits(id)
); 

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

INSERT INTO characters (name, bestQuote, characterGroup) VALUES('Rachel Green', 'No uterus, no opinion', 'Main Group');
INSERT INTO characters (name, bestQuote, characterGroup) VALUES('Monica Geller', 'Welcome to the real world. It sucks. You are gonna love it.', 'Main Group');
INSERT INTO characters (name, bestQuote, characterGroup) VALUES('Ross Geller', 'WE WERE ON A BREAK!', 'Main Group');
INSERT INTO characters (name, bestQuote, characterGroup) VALUES('Phoebe Buffay', 'They dont know that we know they know we know!', 'Main Group');
INSERT INTO characters (name, bestQuote, characterGroup) VALUES('Chandler Bing', 'Im hopeless and awkward and desperate for love!', 'Main Group');
INSERT INTO characters (name, bestQuote, characterGroup) VALUES('Joey Tribbiani', 'So why dont you be a grown-up and come and watch some TV in the fort?', 'Main Group');
INSERT INTO characters (name, bestQuote, characterGroup) VALUES('Janice Hosenstein', 'Im riding the alimony pony!', 'Minor characters');
INSERT INTO characters (name, bestQuote, characterGroup) VALUES('Mike Hanagan', 'I know this is gonna sound crazy but we could not let the box of rats ruin our lives.', 'Minor characters');
INSERT INTO characters (name, bestQuote, characterGroup) VALUES('Gunther', 'Thanks for not marrying Rachel', 'Minor characters');
INSERT INTO characters (name, bestQuote, characterGroup) VALUES('Ursala Buffay', 'Hurry up! I gotta pray!', 'Minor characters');

INSERT INTO traits (trait) VALUES ('Caring');
INSERT INTO traits (trait) VALUES ('Energetic');
INSERT INTO traits (trait) VALUES ('Entitled');
INSERT INTO traits (trait) VALUES ('Funny');
INSERT INTO traits (trait) VALUES ('Jealous');
INSERT INTO traits (trait) VALUES ('OCD');
INSERT INTO traits (trait) VALUES ('Sad');
INSERT INTO traits (trait) VALUES ('Sarcastic');
INSERT INTO traits (trait) VALUES ('Narcissist');
INSERT INTO traits (trait) VALUES ('Supportive');
INSERT INTO traits (trait) VALUES ('Temperamental');

INSERT INTO characterTraits(characterId, traitId) VALUES (1, 3);  
INSERT INTO characterTraits(characterId, traitId) VALUES (1, 5);
INSERT INTO characterTraits(characterId, traitId) VALUES (1, 9);
INSERT INTO characterTraits(characterId, traitId) VALUES (2, 6);
INSERT INTO characterTraits(characterId, traitId) VALUES (2, 9);
INSERT INTO characterTraits(characterId, traitId) VALUES (2, 11);
INSERT INTO characterTraits(characterId, traitId) VALUES (3, 1);
INSERT INTO characterTraits(characterId, traitId) VALUES (3, 5);
INSERT INTO characterTraits(characterId, traitId) VALUES (3, 11);
INSERT INTO characterTraits(characterId, traitId) VALUES (4, 1);
INSERT INTO characterTraits(characterId, traitId) VALUES (4, 4);
INSERT INTO characterTraits(characterId, traitId) VALUES (4, 10);
INSERT INTO characterTraits(characterId, traitId) VALUES (5, 4);
INSERT INTO characterTraits(characterId, traitId) VALUES (5, 8);
INSERT INTO characterTraits(characterId, traitId) VALUES (5, 10);
INSERT INTO characterTraits(characterId, traitId) VALUES (6, 1);
INSERT INTO characterTraits(characterId, traitId) VALUES (6, 4);
INSERT INTO characterTraits(characterId, traitId) VALUES (6, 10);
INSERT INTO characterTraits(characterId, traitId) VALUES (7, 1);
INSERT INTO characterTraits(characterId, traitId) VALUES (7, 2);
INSERT INTO characterTraits(characterId, traitId) VALUES (7, 4);
INSERT INTO characterTraits(characterId, traitId) VALUES (8, 4);
INSERT INTO characterTraits(characterId, traitId) VALUES (8, 8);
INSERT INTO characterTraits(characterId, traitId) VALUES (8, 10);
INSERT INTO characterTraits(characterId, traitId) VALUES (9, 5);
INSERT INTO characterTraits(characterId, traitId) VALUES (9, 7);
INSERT INTO characterTraits(characterId, traitId) VALUES (9, 11);
INSERT INTO characterTraits(characterId, traitId) VALUES (10, 3);
INSERT INTO characterTraits(characterId, traitId) VALUES (10, 9);
INSERT INTO characterTraits(characterId, traitId) VALUES (10, 11);

INSERT INTO debatables(topic, opinion, reason) VALUES ('Were Ross and Rachel on a break?', 'Yes', 'Rachel wanted a break becuase Ross was jealous and controlling. She had a good reason to call a break and Ross made a bad move sleeping someone right off the bat. However he had the prerogative to do so since, THEY WERE ON A BREAK!');
INSERT INTO debatables(topic, opinion, reason) VALUES ('Should Joey and Phoebe have dated?', 'No', 'They had a good dynamic that would have been ruined if they dated and broke up.');
INSERT INTO debatables(topic, opinion, reason) VALUES ('Was Janice really as bad as the group said she was?', 'No', 'She had an annoying laugh and voice, but she was a genuinely good person. She cared about Chandler and the entire group despite their bullying behaviors.');
INSERT INTO debatables(topic, opinion, reason) VALUES ('Were Rachel and Joey a good couple?', 'Yes', 'I dont think they were endgame, but they would have been a good couple for a season or two. Joey cared about Rachel for the women she grew into, not the high-school girl she once was.');
INSERT INTO debatables(topic, opinion, reason) VALUES ('Was there a best "Friend"?', 'Yes', 'Joey! He was a womenizing jerk at times, but he was a good friend and overall person. All the characters had their flaws, but Joey was there for everyone not matter what. He was caring, understanding, and forgiving.')