BEGIN;
            DROP TABLE IF EXISTS
users
            CASCADE;

CREATE TABLE users
(
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            password TEXT NOT NULL
);

COMMIT;


            