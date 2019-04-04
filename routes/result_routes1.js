var result=require('../models/result_model');
var express=require('express');
var router=express.Router();

router.get('/:c_no/:d_name',function(req,res,next){
    result.getStudentByclassdiv(req.params.c_no,req.params.d_name,function(err,rows){
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
    result.getResults(function(err,rows){
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