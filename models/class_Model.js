var db=require('../dbconnection');
var studentclass={
    Addclass:function(item,callback)
    {
        db.query('insert into class_tbl values(?,?)',[item.class_id,item.class_number],callback);
    },
    getclass:function(callback)
    {
        db.query('select * from class_tbl',callback);
    },
    deleteclass:function(class_number,callback)
    {
        db.query('delete from class_tbl where class_id=?',[class_id],callback);
    }
      
};
module.exports=studentclass;