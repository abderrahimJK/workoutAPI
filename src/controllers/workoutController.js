const workoutService = require('../services/workoutService')


const getAllWorkouts = (req, res) =>{
    try{

        const allWorkouts = workoutService.getAllWorkouts();
        res.send({status:'ok',data: allWorkouts});
    }catch(error){
        res
        .status(error?.status)
        .send({status:'FAILED', data :{
            error : error?.message || error
        }})
    }
};

const getOneWorkout = (req, res) =>{
   const {
       params : {workoutID},
   } = req;

   if(!workoutID){
    res
        .status(400)
        .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
        });
   }
    try {
        const workout = workoutService.getOneWorkout(workoutID);
        res.send({status:'ok',data: workout});
    } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const createWorkout = (req, res) =>{

    const {body} = req;

    if( !body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips){
        res.status(400)
            .send({status: 'FAILED', data : {
                error: "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'"
            }});
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

    try{

        const createWorkout = workoutService.createWorkout(newWorkout);
        res.status(200).send({status : "OK", data : createWorkout})
    }catch(error){
        res
        .status(error?.status || 500)
        .send({status : "FAILED", data :{error: error?.message || error}});
    }
}

const updateWorkout = (req, res) =>{
    const {
        body,
        params: {workoutId}
    } = req

    if(!workoutId){
        res
        .status(400)
        .send({
            status: "FAILED",
            data: { error: "Parameter ':workoutId' can not be empty" },
        });
    }
    try {
        const updatedWorkout = workoutService.updateWorkout(workoutId, body, params);
        res.send({status : "OK", data : updatedWorkout});
    } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
}

const deleteWorkout = (req, res) =>{
    const {
        params: {workoutId},
    } = req;

    if(!workoutId){
        res
        .status(400)
        .send({
            status: "FAILED",
            data: { error: "Parameter ':workoutId' can not be empty" },
        });
    }
    try {
        workoutService.deleteWorkout(workoutId);
        res.status(204).send({status : "OK"});
    } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
};