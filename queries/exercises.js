const db = require('../db/dbConfig')


const getAllExercises = async () => {
    try {
        const allExercises = await db.any("SELECT * FROM exercises")
        return allExercises;
    } catch (e) {
        return e;
    }
}

const getAnExercise = async (id) => {
    try {
        const exercise = await db.one("SELECT * FROM exercises WHERE id=$1", id)
        return exercise;
    } catch (e) {
        return e;
    }
}

const updateExercise = async (id, exercise) => {
    const { name, image, muscle_group, targeted_muscles, difficulty_level, how_to } = exercise;

    try {
        const updatedExercise = await db.one("UPDATE exercises SET name=$1, image=$2, muscle_group=$3, targeted_muscles=$4, difficulty_level=$5, how_to=$6 WHERE id=$7 RETURNING *", [name, image, muscle_group, targeted_muscles, difficulty_level, how_to, id]);
        return updatedExercise;
    } catch (e) {
        return e;
    }
}

const createExercise = async (exerciseToAdd) => {
    const { name, image, muscle_group, targeted_muscles, difficulty_level, how_to } = exerciseToAdd;
    
    try {
        const newExercise = await db.one("INSERT INTO exercises (name, image, muscle_group, targeted_muscles, difficulty_level, how_to) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [name, image, muscle_group, targeted_muscles, difficulty_level, how_to])
        return newExercise;
    } catch (e) {
        return e;
    }
}

const deleteExercise = async (id) => {
    try {
        const deletedExercise = await db.one("DELETE FROM exercises WHERE id=$1 RETURNING *", id)
        return deletedExercise;
    } catch (e) {
        return e;
    }
}

module.exports = {
    getAllExercises,
    getAnExercise,
    updateExercise,
    createExercise,
    deleteExercise
}