BEGIN;
DROP TABLE IF EXISTS users , posts  CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50) not null,
    surname VARCHAR(50) not null,
    email VARCHAR(100) not null unique,
    passwords TEXT not null,
    birthday VARCHAR(50),
    gender VARCHAR(20)
);

-- Insert into posts (content,image_url, user_id) values ('Eman and alaa are here', 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',1);


CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    content TEXT not null,
    image_url TEXT, 
    user_id integer REFERENCES users(id)
);


COMMIT;