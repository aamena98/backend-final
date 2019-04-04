var s_interaction=require('../models/PT_interaction_model');
var express=require('express');
var router=express.Router();

router.get('/:r_id',function(req,res,next){
    s_interaction.getRepliesByid(req.params.r_id,function(err,rows){
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