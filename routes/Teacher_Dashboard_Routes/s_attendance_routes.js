var s_attendance=require('../../models/Teacher_Dashboard_models/attendance_model');
var express=require('express');
var router=express.Router();


router.get('/:c_no/:d_name',function(req,res,next){
    s_attendance.getStudentByclassdiv(req.params.c_no,req.params.d_name,function(err,rows){
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


router.post('',function(req,res,next){
    s_attendance.AddAttendance(req.body,function(err,rows){
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
    


router.put('',function(req,res,next){
    s_attendance.updateAttendance(req.body,function(err,rows){
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
      
  

router.get('',function(req,res,next){
    s_attendance.getStudentAttendance(function(err,rows){
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



router.get('/:fk_u_id',function(req,res,next){
    s_attendance.getAttendanceCount(req.params.fk_u_id,function(err,rows){
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
