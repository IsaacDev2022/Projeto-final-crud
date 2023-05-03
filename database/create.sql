CREATE DATABASE "projeto-final-crud"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    taskName VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	priority VARCHAR(20) NOT NULL
);