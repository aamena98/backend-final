var remark=require('../models/remark_model');
var express=require('express');
var router=express.Router();

router.get('',function(req,res,next){
    remark.viewRemark(function(err,rows){
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
    remark.viewRemarkByid(req.params.id,function(err,rows){
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
    remark.AddRemark(req.body,function(err,rows){
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
    remark.updateRemarkStatus(req.params.id,function(err,rows){
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