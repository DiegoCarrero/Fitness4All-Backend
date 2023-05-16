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
    const { name, image, muscleGroup, targetedMuscles } = exercise;

    try {
        const updatedExercise = await db.one("UPDATE exercises SET name=$1, image=$2, muscleGroup=$3, targetedMuscles=$4 WHERE id=$5 RETURNING *", [name, image, muscleGroup, targetedMuscles, id]);
        return updatedExercise;
    } catch (e) {
        return e;
    }
}

const createExercise = async (exerciseToAdd) => {
    const { name, image, muscleGroup, targetedMuscles } = exerciseToAdd;
    
    try {
        const newExercise = await db.one("INSERT INTO exercises (name, image, muscleGroup, targetedMuscles) VALUES ($1, $2, $3, $4) RETURNING *", [name, image, muscleGroup, targetedMuscles])
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