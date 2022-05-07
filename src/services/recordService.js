const Record = require('../database/record')

const getRecordForWorkout = (workoutId) =>{
    try{
        return Record.getRecordForWorkout(workoutId);
    }catch(err){
        throw err;
    }
}
module.exports = {
    getRecordForWorkout
}
