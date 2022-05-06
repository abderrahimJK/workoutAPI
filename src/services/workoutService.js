const workout = require('../database/workout');
const {v4: uuid} = require('uuid');



const getAllWorkouts = () => {
    
    try {
      return workout.getAllWorkouts();
    } catch (error) {
      throw error;
    }
  };
  
  const getOneWorkout = (workoutId) => {

    try {
      return workout.getWorkoutById(workoutId);
    } catch (error) {
      throw error;
    }
  };
  
  const createWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id : uuid(),
        createdAt : new Date().toLocaleString('en-US', {timezone: 'GMT'}),
        updatedAt : new Date().toLocaleString('en-US', {timezone: 'GMT'})
    };

    try{
      //adding
      const createdWorkout = workout.createNewWorkout(workoutToInsert);
      return createdWorkout;
    }catch(error){
      throw Error;
    }
    
  };
  
  const updateWorkout = (workoutId, changes) => {

    try {
      return workout.updateWorkout(workoutId, changes);
    } catch (error) {
      throw error;
    }
  };
  
  const deleteWorkout = (workoutId) => {
    
    try {
      workout.deleteWorkout(workoutId);
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout,
  };