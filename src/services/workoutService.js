const workout = require('../database/workout');
const {v4: uuid} = require('uuid');



const getAllWorkouts = () => {
    return workout.getAllWorkouts();
  };
  
  const getOneWorkout = () => {
    return;
  };
  
  const createWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id : uuid(),
        createdAt : new Date().toLocaleString('en-US', {timezone: 'GMT'}),
        updatedAt : new Date().toLocaleString('en-US', {timezone: 'GMT'})
    };

    //adding
    const createdWorkout = workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
    
  };
  
  const updateOneWorkout = () => {
    return;
  };
  
  const deleteOneWorkout = () => {
    return;
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };