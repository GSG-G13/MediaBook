BEGIN;
DROP TABLE IF EXISTS users , posts ;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(20) not null,
    surname VARCHAR(20) not null,
    mobileOrEmail VARCHAR(30) not null,
    passwords VARCHAR(20) not null,
    birthday VARCHAR(12),
    gender VARCHAR(10),
    token TEXT
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR (50) not null,
    content TEXT not null,
    user_id int REFERENCES users(id)
);

COMMIT;