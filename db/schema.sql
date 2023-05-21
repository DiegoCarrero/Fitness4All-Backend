DROP DATABASE IF EXISTS exercises_dev;

CREATE DATABASE exercises_dev;

\c exercises_dev;

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT,
    muscle_group TEXT NOT NULL,
    targeted_muscles TEXT,
    difficulty_level TEXT,
    how_to TEXT
)