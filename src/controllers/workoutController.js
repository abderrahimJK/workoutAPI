const workoutService = require('../services/workoutService')


const getAllWorkouts = (req, res) =>{
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status:'ok',data: allWorkouts});
};

const getOneWorkout = (req, res) =>{
    const getWorkout = workoutService.getOneWorkout();
    res.send('Get an existing workout');
}

const createWorkout = (req, res) =>{

    const {body} = req;

    if( !body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips){
        return;
    }

    //adding
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };

    const createWorkout = workoutService.createWorkout(newWorkout);


    res.status(200).send({status : "OK", data : createWorkout})
}

const updateWorkout = (req, res) =>{
    const updatedWorkout = workoutService.updateWorkout();
    res.send('Update an existing workout');
}

const deleteWorkout = (req, res) =>{
    const deletedWorkout = workoutService.deleteWorkout();
    res.send('Delete an existing workout');
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
};