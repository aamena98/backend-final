var leave=require('../models/LeaveModel');
var express=require('express');
var router=express.Router();

router.post('',function(req,res,next){
    leave.AddLeave(req.body,function(err,rows){
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
    leave.getLeaves(function(err,rows){
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


router.get('/:fk_t_id',function(req,res,next){
    leave.getAllinfo(req.params.fk_t_id,function(err,rows){
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
