CREATE TABLE "gallery" (
	"id" serial PRIMARY KEY,
	"title" varchar(127) NOT NULL,
	"path" varchar (150) NOT NULL,
	"description" varchar (150) NOT NULL,
	"likes" INT DEFAULT 0
);

INSERT INTO "gallery" ("title", "path", "description")
VALUES ('Music video shoot', 'images/cimilada.jpg', 'First live performance with modular sythesizer'),
('Wall of Sound', 'images/bins.jpg', 'The first wall of sound I got to perform through.'),
('Live Performance', 'images/live.jpg', 'Dialing voltages between modules.'),
('Downtown Function', 'images/communion.jpg', 'Summer closing for longtime Minneapolis event "Communion"'),
('Jupiter Disco', 'images/disco.jpg', 'Crumpled disco ball at Jupiter Disco - the first venue I played in NYC');

SELECT * FROM gallery ORDER BY id ASC;

UPDATE gallery SET likes = likes + 1 WHERE id=1;

INSERT INTO "gallery" ("title", "path", "description")
VALUES ('Album cover', 'https://f4.bcbits.com/img/a3128555735_2.jpg', 'Made by a colleague Phillip Rugo');
