var t_interaction=require('../../models/Teacher_Dashboard_models/TeacherInteraction_model');
var express=require('express');
var router=express.Router();

router.get('/:fk_t_id',function(req,res,next){
    t_interaction.getViewedMessages(req.params.fk_t_id,function(err,rows){
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