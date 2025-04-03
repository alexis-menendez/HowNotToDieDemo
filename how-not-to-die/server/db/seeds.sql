INSERT INTO planet ( name, description, hostility, exploration) 
VALUES 
('Newyn', 'Newyn is a desolate world. Crops wwill not yield and cattle will not endure. Within Newyn There are small Oasis known as the Glimpses of Paradise. These Oasis rarely last long, forcing the life of Newyn to be nomadic, moving from oasis to oasis. The Life of Newyn is hardy, built to last, constantly evolving to match the environment. The general weather of Newyn is dark and cold, with constant cloud coverage, raining for days at a time dropping temperatures well below freezing. Forcing the Nomads to travel to Oasis with large Heat Reserves bellowing from the Planets Core.', 'Extremely High', 87),
('Brune', 'Brune is divided into 2 terrains, the Taiga, the high altitude forest dominated by aerial life, and the deep caverns, Massive cities mined deep into the mountains, the hubbub of life pouring throughout the great halls, industry and innovation driven by the need for survival against the animals outside. The need to dig ever deeper.', 'Moderate', 45),
('Ocean 12 B', 'A Massive water planet only accessible to land lubbers by the elevators on the rocky outcroppings. The sea Folk of !2 B are divided into 2 types. The Ichthyites, and the Crustacs. The Ichthyites are more like the earth fish, while the Crustacs are more insectoid. The Planet is divided into 4 zones, the shallows where the smallest of each species are able to live, the Reefs, where the main living conditions of each species are held, the open waters, where industrial zones are always moving forward, and finally the abyss, where the hive mind dwells.', 'Low-unknown', 12);


INSERT INTO landingspot (name, planet, description, flora, fauna, planet_id)
VALUES
('FAILED', 'Doubt', 'Run', 'None', 'None', 1),
('Landing 2', 'Brune', 'Vera recommended landing between the forest and the opening of a cave', 'Ran out of battery to record', 'None', 2),
('Landing 3', 'Ocean 12 B','3000 in Section R2D-2', 'doewh', 'dshie', 3);

INSERT INTO flora (name, planet, teeth, lickability, food, description, planet_id)
VALUES
('Tree', 'Doubt','It looks like teeth, it could be teeth... will not test hypothesis.', 'No. No. Absolutely do not lick this. The trip is not worth it.', 'People. People like things. Anything pepole shaped. Not the friendly LOTR trees', 'This is not a tree. It looks like  create, sometimes decides to act like a tree and when it offers you shade... it takes a big chuck of your neck. You know, the BIT WITH YOUR HEAD!', 1),
('YilsIm', 'Brune', 'None', 'You could... let your enemies do it', 'Photosynthesis via moon and draws nutrients from the mineral filled water under the rocks', 'Translated to Moon Shine Petal. This plant is known for its use as a posion to treat posion. Found in the deepest of mines, this planet grows using touch, as it has no access to sun. Do not eat the roots or petals it is were the toxicans are heavily concentrated in. ', 2),
('Djeos', 'Doubt', 'warning', 'NO NO NO NO NO', 'YOU', 'Warning, warning, warning', 1);

INSERT INTO fauna (name, planet, teeth, claws, food, description, planet_id)
VALUES
( 'rUN', 'Doubt', '0', '0', 'RuN rUn', 'RuN rUn', 1),
('Mimics', 'Brune', '87', '5', 'While not at the top of the food chain, Mimics are dangerous predator, however whatever loot they might contain...', 'In the shape of random containers, they sometimes appear to carry items or loot. Be wary, it is merely a trick.', 2),
( 'Void Whale', 'Ocean 12 B', '0', '0', 'While an omivore, perfers plankton and planet.', 'One of the largest creatures in the ocean. Peaceful and serene, they have very little predators. Of course, they are not the only massively sized creatures that lurk in the dark depth below.', 3),
('Drawf?', 'Brune', '53', '0', 'Just because they look small with overgrown beards... do NOT confuse them for gnomes... whatever they are...','that is what it looks like?', 2),
('cONnectioN InteRRUpted', 'cONnectioN InteRRUpted','0', '0', 'cONnectioN InteRRUpted', 'Connection Interrrupted', 1);


INSERT INTO unexplained (name, planet, description, planet_id)
VALUES
('The Shriek', 'Doubt', 'If you hear it, it is too late.', 1),
('The Dungeon Lot', 'Brune', 'A local said there is a dungeon that contains much loot, but I dare not go near the treasure chests.', 2),
('The Shining', 'Ocean 12 B', 'It shines from so far away. All that work make us...', 3),
('Missing Ship', 'Ocean 12 B', 'Vera said that once a shuffle just simply vanished before it landed. In single glup.', 3),
('The Tree Folk', 'Brune', 'Vera mentioned that once a pilot entered the forest, and never came back, but sometimes you can still hear their screams.', 2),
('Silence', 'Doubt', 'FILE CORRUPTED. FILE CORRUPTED.', 1);
('If', 'you', 'hear', 'it', 1),

-- 🌱 Seed dummy users (password for all = "test1234")

INSERT INTO users (username, password)
VALUES 
  ('astro_ava', '$2b$10$g6EFm9gTTUB3tuLKwNOA0ucHQq0KyEKguFJxqNEwGpFzLe.dPOQSa'),
  ('nova_nick', '$2b$10$g6EFm9gTTUB3tuLKwNOA0ucHQq0KyEKguFJxqNEwGpFzLe.dPOQSa'),
  ('luna_lyle', '$2b$10$g6EFm9gTTUB3tuLKwNOA0ucHQq0KyEKguFJxqNEwGpFzLe.dPOQSa'),
  ('orbit_olga', '$2b$10$g6EFm9gTTUB3tuLKwNOA0ucHQq0KyEKguFJxqNEwGpFzLe.dPOQSa'),
  ('comet_casey', '$2b$10$g6EFm9gTTUB3tuLKwNOA0ucHQq0KyEKguFJxqNEwGpFzLe.dPOQSa');

