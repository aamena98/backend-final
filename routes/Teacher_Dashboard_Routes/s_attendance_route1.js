var s_attendance=require('../../models/Teacher_Dashboard_models/attendance_model');
var express=require('express');
var router=express.Router();


router.get('/:fk_u_id',function(req,res,next){
    s_attendance.getAttendancebyUserid(req.params.fk_u_id,function(err,rows){
        if(err)
        {
           res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});


module.exports=router;
