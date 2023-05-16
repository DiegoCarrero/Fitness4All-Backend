DROP DATABASE IF EXISTS exercises_dev;

CREATE DATABASE exercises_dev;

\c exercises_dev;

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT,
    muscleGroup TEXT NOT NULL,
    targetedMuscle TEXT NOT NULL
);