INSERT INTO planet ( name, description, hostility, exploration) 
VALUES 
('Newyn', 'Newyn is a desolate world. Crops wwill not yield and cattle will not endure. Within Newyn There are small Oasis known as the Glimpses of Paradise. These Oasis rarely last long, forcing the life of Newyn to be nomadic, moving from oasis to oasis. The Life of Newyn is hardy, built to last, constantly evolving to match the environment. The general weather of Newyn is dark and cold, with constant cloud coverage, raining for days at a time dropping temperatures well below freezing. Forcing the Nomads to travel to Oasis with large Heat Reserves bellowing from the Planets Core.', 'Extremely High', 87),
('Brune', 'Brune is divided into 2 terrains, the Taiga, the high altitude forest dominated by aerial life, and the deep caverns, Massive cities mined deep into the mountains, the hubbub of life pouring throughout the great halls, industry and innovation driven by the need for survival against the animals outside. The need to dig ever deeper.', 'Moderate', 45),
('Ocean 12 B', 'A Massive water planet only accessible to land lubbers by the elevators on the rocky outcroppings. The sea Folk of !2 B are divided into 2 types. The Ichthyites, and the Crustacs. The Ichthyites are more like the earth fish, while the Crustacs are more insectoid. The Planet is divided into 4 zones, the shallows where the smallest of each species are able to live, the Reefs, where the main living conditions of each species are held, the open waters, where industrial zones are always moving forward, and finally the abyss, where the hive mind dwells.', 'Low-unknown', 12);


INSERT INTO landingspot (name, description, flora, fauna, planet_id)
VALUES
('FAILED', 'Run', 'None', 'None', 1),
('Landing 2', 'Vera recommended landing between the forest and the opening of a cave', 'Ran out of battery to record', 'None', 2),
('Landing 3', '3000 in Section R2D-2', 'doewh', 'dshie', 3);

INSERT INTO flora (name, description, planet_id)
VALUES
('Tree', 'This is not a tree.', 1),
('YilsIm', 'Translated to Moon Shine Petal. This plant is known for its use as a posion to treat posion. Found in the deepest of mines, this planet grows using touch, as it has no access to sun. Do not eat the roots or petals it is were the toxicans are heavily concentrated in. ', 2),
('Djeos', 'Warning, warning, warning', 1);

INSERT INTO fauna (name, description, planet_id)
VALUES
( 'rUN', 'RuN rUn', 1),
('Mimics', 'In the shape of random containers, they sometimes appear to carry items or loot. Be wary, it is merely a trick.', 2),
( 'Fish', 'I think it is a fish, it is long and shiny', 3),
('Drawf?', 'that is what it looks like?', 2),
('cONnectioN InteRRUpted', 'Connection Interrrupted', 1);


INSERT INTO unexplained (name, description, planet_id)
VALUES
('The Shriek', 'If you hear it, it is too late.', 1),
('The Dungeon Lot', 'A local said there is a dungeon that contains much loot, but I dare not go near the treasure chests.', 2),
('The Shining', 'It shines from so far away. All that work make us...', 3),
('Missing Ship', 'Vera said that once a shuffle just simply vanished before it landed. In single glup.', 3),
('The Tree Folk', 'Vera mentioned that once a pilot entered the forest, and never came back, but sometimes you can still hear their screams.', 2),
('Silence', 'FILE CORRUPTED. FILE CORRUPTED.', 1);



