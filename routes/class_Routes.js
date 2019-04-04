var studentclass=require('../models/class_model')
var express=require('express');
var router=express.Router();

router.get('',function(req,res,next){
    studentclass.getclass(function(err,rows){
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

router.post('',function(req,res,next){
   // console.log(req.body);
    studentclass.Addclass(req.body,function(err,rows){
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



router.delete('/:class_number',function(req,res,next){
    studentclass.deleteclass(req.params.class_number,function(err,rows){
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
