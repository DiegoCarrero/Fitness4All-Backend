const express = require('express');
const exercises = express.Router()
const { getAllExercises, getAnExercise, createExercise, deleteExercise, updateExercise } = require('../queries/Exercises');

exercises.get('/', async (req, res) => {
    const allExercises = await getAllExercises();
    allExercises ? res.status(200).json(allExercises) : res.status(500).json({ error: 'server error' })
});

exercises.get('/:id', async (req, res) => {
    const { id } = req.params;
    const exercise = await getAnExercise(id);
    exercise ? res.status(200).json(exercise) : res.status(500).json({ error: 'server error' })
});

exercises.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const updatedExercise = await updateExercise(id, body);
        res.status(200).json(updatedExercise);
    } catch (error) {
        res.status(400).json({ error: error });
    }
})

exercises.post('/', async (req, res) => {
    const newExercise = req.body;

    try {
        const createdExercise = await createExercise(newExercise);
        res.status(200).json(createdExercise);
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
})

exercises.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const deletedExercise = await deleteExercise(id);
        res.status(200).json(deletedExercise);
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
})

module.exports = exercises;