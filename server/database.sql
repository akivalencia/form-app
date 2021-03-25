CREATE DATABASE contactform;

CREATE TABLE contact(
    user_id SERIAL PRIMARY KEY, 
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    phone_number INT, 
    email VARCHAR(200)
)