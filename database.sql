-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

--DATABASE name: react-shopping-list ----



CREATE TABLE "list" (
	"id" SERIAL PRIMARY KEY,
	"item" varchar(80),
	"quantity" DECIMAL(5,2),
	"unit" varchar(20)
);


INSERT into "list" ( "item", "quantity", "unit")
VALUES ( 'bananas', 3.3, 'bunches'); 