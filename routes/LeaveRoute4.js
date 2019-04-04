var leave=require('../models/LeaveModel');
var express=require('express');
var router=express.Router();


router.get('/:fk_t_id',function(req,res,next){
    leave.getAllAccepted(req.params.fk_t_id,function(err,rows){
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
