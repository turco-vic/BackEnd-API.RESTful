CREATE DATABASE heroes;

\c heroes; 

CREATE TABLE publishers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE heroes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    publisher_id INTEGER REFERENCES publishers(id) ON DELETE SET NULL,
    photo TEXT
);

INSERT INTO publishers (name) VALUES
('Marvel'),
('DC Comics');

INSERT INTO heroes (name, publisher_id, photo) VALUES
('Spider-Man', 1, NULL),
('Iron Man', 1, NULL),
('Thor', 1, NULL),
('Hulk', 1, NULL),
('Black Widow', 1, NULL),
('Batman', 2, NULL),
('Superman', 2, NULL),
('Wonder Woman', 2, NULL),
('Flash', 2, NULL),
('Aquaman', 2, NULL);