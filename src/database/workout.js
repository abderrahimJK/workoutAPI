const DB = require('./db.json')
const {saveToDatabase} = require('./utils')


const getAllWorkouts = () => {
    try {
        return DB.workouts;
    } catch (error) {
        throw { status: 500, message: error };
    }
}

//ADD

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded =
        DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
        if(isAlreadyAdded) {
            throw {
                status: 400,
                message : `Workout with the name '${newWorkout.name}' already exists`
            }
        }
        try{

            DB.workouts.push(newWorkout);
            saveToDatabase(DB);
            return newWorkout;
        }catch(error){
            throw { status : 500, message : error ?.message || error};
        }
}

const getWorkoutById = (id) =>{

    try {
        const Workout  = DB.workouts.find((workout)=> workout.id === id);
        if (!Workout) {
          throw {
            status: 400,
            message: `Can't find workout with the id '${id}'`,
          };
        }
        return Workout;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
}

const updateWorkout = (id, changes) =>{
    try{

        const isAlreadyAdded =
        DB.workouts.findIndex((workout) => workout.name === changes.name) > -1;
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `Workout with the name '${changes.name}' already exists`,
            };
        }
        const workoutToUpdate = DB.workouts.findIndex((workout)=> workout.id === id);

        if(!workoutToUpdate){
            throw {
                status: 400,
                message: `Can't find workout with the id '${id}'`,
            };
        }

        const updatedWorkout = {
            ...DB.workout[indexWorkout],
            ...changes,
            updateAt : new Date().toLocaleString('en-US', {timezone: 'GMT'})
        };

        DB.workouts[indexWorkout] = updatedWorkout;
        saveToDatabase(DB);
        return updatedWorkout;
    }catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

const deleteWorkout = (workoutId) => {
    try{
        const workoutIndex = DB.workouts.findIndex((workout) => workout.id === workoutId)

        if(!workoutIndex === -1){
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`,
            };
        }

        DB.workouts.splice(workoutIndex, 1);
        saveToDatabase(DB);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}


module.exports = {
    getAllWorkouts,
    createNewWorkout,
    getWorkoutById,
    updateWorkout,
    deleteWorkout
};