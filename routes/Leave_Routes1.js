var leave=require('../models/LeaveModel');
var express=require('express');
var router=express.Router();


router.put('/:fk_u_id/:l_date',function(req,res,next){
    leave.updateAcceptStatus(req.params.fk_u_id,req.params.l_date,function(err,rows){
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
    leave.getAcceptedLeaves(req.params.fk_t_id,function(err,rows){
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
