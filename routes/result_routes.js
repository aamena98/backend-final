var result=require('../models/result_model');
var express=require('express');
var router=express.Router();

router.get('/:fk_u_id/:r_examtype',function(req,res,next){
    result.getResultByID(req.params.fk_u_id,req.params.r_examtype,function(err,rows){
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
    result.Addresult(req.body,function(err,rows){
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



router.delete('/:fk_u_id',function(req,res,next){
    result.deleteresult(req.params.fk_u_id,function(err,rows){
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
    

    router.put('/:fk_u_id',function(req,res,next){
        result.updateresult(req.body,req.params.fk_u_id,function(err,rows){
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
