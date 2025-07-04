CREATE SCHEMA ormlearn;
CREATE TABLE country (
    code VARCHAR(2) PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO country VALUES ('IN', 'India');
INSERT INTO country VALUES ('US', 'United States of America');
SELECT * FROM country;
