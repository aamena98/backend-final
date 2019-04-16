var student=require('../models/students_models/studentModel');
var express=require('express');
var router=express.Router();

router.get('/:class/:div',function(req,res,next){
    student.viewStudentsOnAdmin(req.params.class,req.params.div,function(err,rows){
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