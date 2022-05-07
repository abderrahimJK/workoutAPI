const recordService = require('../services/recordService')


const getRecord = (req,res) => {

    try {
        const {
            params: {workoutID}
        } = req

        if(!workoutID){
            res
                .status(400)
                .send({
                    status: "FAILED",
                    data: { error: "Parameter ':workoutId' can not be empty" },
                });
        }
        
        const record = recordService.getRecordForWorkout(workoutID);
        res.send({status: 'ok',data: record})
    } catch (error) {
       res
        .status(error?.status)
        .send({status:'FAILED', data :{
            error : error?.message || error
        }})
    }
}

module.exports = {
    getRecord
}
