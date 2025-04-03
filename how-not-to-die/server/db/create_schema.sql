DROP TABLE IF EXISTS planet CASCADE;
DROP TABLE IF EXISTS landingspot CASCADE;
DROP TABLE IF EXISTS flora CASCADE;
DROP TABLE IF EXISTS fauna CASCADE;
DROP TABLE IF EXISTS unexplained CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Followed by your CREATE TABLE statements


CREATE TABLE planet (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    hostility VARCHAR(15) NOT NULL,
    exploration INT NOT NULL
    
);

CREATE TABLE landingspot (
  
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    flora VARCHAR(50) NOT NULL,
    fauna VARCHAR(50) NOT NULL,
    planet_id INT NOT NULL,
    FOREIGN KEY (planet_id) REFERENCES planet(id) ON DELETE CASCADE
);

CREATE TABLE flora (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    planet_id INT NOT NULL,
    FOREIGN KEY (planet_id) REFERENCES planet(id) ON DELETE CASCADE
);


CREATE TABLE fauna (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    planet_id INT NOT NULL,
    FOREIGN KEY (planet_id) REFERENCES planet(id) ON DELETE CASCADE
);

CREATE TABLE unexplained (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    planet_id INT NOT NULL,
    FOREIGN KEY (planet_id) REFERENCES planet(id) ON DELETE CASCADE
);


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
