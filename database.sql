-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

--DATABASE name: react-shopping-list ----



CREATE TABLE "list" (
	"id" SERIAL PRIMARY KEY,
	"item" varchar(80),
	"quantity" DECIMAL(5,2),
	"unit" varchar(20),
	"purchased" BOOLEAN DEFAULT false;
);


INSERT into "list" ( "item", "quantity", "unit")
VALUES ( 'bananas', 3.3, 'bunches'); 

-- Dummy item 
INSERT INTO "list" ("item", "quantity", "unit")
VALUES ('milk', 1, 'gallon');

-- Dummy test
SELECT * FROM "list" ORDER BY "item" ASC;

-- Adding column to the table to hold the purchased value
ALTER TABLE "list" 
ADD "purchased" BOOLEAN DEFAULT false;