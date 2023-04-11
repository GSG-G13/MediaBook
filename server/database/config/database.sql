BEGIN;
DROP TABLE IF EXISTS users , posts ;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50) not null,
    surname VARCHAR(50) not null,
    email VARCHAR(100) not null unique,
    passwords TEXT not null,
    birthday VARCHAR(50),
    gender VARCHAR(20)
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR (50) not null,
    content TEXT not null,
    user_id int REFERENCES users(id)
);

COMMIT;