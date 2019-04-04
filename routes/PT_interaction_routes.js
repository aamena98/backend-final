var interact=require('../models/PT_interaction_model');
var express=require('express');
var router=express.Router();

router.post('',function(req,res,next){
    interact.sendMessage(req.body,function(err,rows){
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
    interact.getMessages(function(err,rows){
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


router.get('/:id',function(req,res,next){
    interact.getMessagebyId(req.params.id,function(err,rows){
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


router.get('/:fk_u_id/:fk_t_id',function(req,res,next){
    interact.getMessageforDisplay(req.params.fk_u_id,req.params.fk_t_id,function(err,rows){
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


router.put('/:id',function(req,res,next){
    interact.updateStatus(req.params.id,function(err,rows){
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