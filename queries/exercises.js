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
    const { name, image, calories, fiber, sodium, sugar, gluten_free, flavor_profile, is_healthy } = exercise;

    try {
        const updatedExercise = await db.one("UPDATE exercises SET name=$1, image=$2, calories=$3, fiber=$4, sodium=$5, sugar=$6, gluten_free=$7, flavor_profile=$8, is_healthy=$9 WHERE id=$10 RETURNING *", [name, image, calories, fiber, sodium, sugar, gluten_free, flavor_profile, is_healthy, id]);
        return updatedExercise;
    } catch (e) {
        return e;
    }
}

const createExercise = async (exerciseToAdd) => {
    const { name, image, calories, fiber, sodium, sugar, gluten_free, flavor_profile, is_healthy } = exerciseToAdd;
    
    try {
        const newExercise = await db.one("INSERT INTO exercises (name, image, calories, fiber, sodium, sugar, gluten_free, flavor_profile, is_healthy) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", [name, image, calories, fiber, sodium, sugar, gluten_free, flavor_profile, is_healthy])
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