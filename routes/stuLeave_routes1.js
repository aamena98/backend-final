var leave=require('../models/LeaveModel');
var express=require('express');
var router=express.Router();


router.get('/:fk_u_id',function(req,res,next){
    leave.getRejectedLeavesforStudent(req.params.fk_u_id,function(err,rows){
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
