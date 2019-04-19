// var result=require('../models/result_Model');
var Result=require('../models/result_Model');
var express=require('express');
var router=express.Router();

router.get('/:c_no/:d_name',function(req,res,next){
    Result.getStudentByclassdiv(req.params.c_no,req.params.d_name,function(err,rows){
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
    Result.getResults(function(err,rows){
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