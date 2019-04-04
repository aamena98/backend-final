var t_interaction=require('../../models/Teacher_Dashboard_models/TeacherInteraction_model');
var express=require('express');
var router=express.Router();

router.get('/:fk_u_id/:fk_t_id',function(req,res,next){
    t_interaction.getRepliesByid(req.params.fk_u_id,req.params.fk_t_id,function(err,rows){
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
    t_interaction.updateStatus(req.params.id,function(err,rows){
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