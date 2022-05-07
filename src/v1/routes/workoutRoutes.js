const express = require('express');
const workoutController = require('../../controllers/workoutController')
const recordController = require('../../controllers/recordController')
const router = express.Router();

//get all workouts
router.get('/', workoutController.getAllWorkouts);

//get workout with his ID
router.get('/:workoutID', workoutController.getOneWorkout)

//create workout
router.post('/', workoutController.createWorkout)

//update workout
router.patch('/:workoutID', workoutController.updateWorkout)

//delete workout
router.delete('/:workoutID', workoutController.deleteWorkout)

//get record of a specific workout
router.get('/:workoutID/records', recordController.getRecord)

module.exports = router;