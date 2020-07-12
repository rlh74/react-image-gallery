CREATE TABLE "gallery" (
	"id" serial PRIMARY KEY,
	"title" varchar(127) NOT NULL,
	"path" varchar (150) NOT NULL,
	"description" varchar (150) NOT NULL,
	"likes" INT
);

INSERT INTO "gallery" ("title", "path", "description", "likes")
VALUES ('Music video shoot', 'images/cimilada.jpg', 'First live performance with modular sythesizer', 0);