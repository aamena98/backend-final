var db=require('../../dbconnection');
var t_interaction={
    getMessagesByUserid:function(fk_t_id,callback){
    //    db.query('select * from message_tbl where fk_t_id=?',[fk_t_id],callback);
        db.query('select s.*,m.* FROM student_tbl s,message_tbl m where m.fk_u_id=s.fk_u_id and m.fk_t_id=? and m.m_status=?',[fk_t_id,'unviewed'],callback);
    },
    getViewedMessages:function(fk_t_id,callback){
        //    db.query('select * from message_tbl where fk_t_id=?',[fk_t_id],callback);
            db.query('select s.*,m.* FROM student_tbl s,message_tbl m where m.fk_u_id=s.fk_u_id and m.fk_t_id=? and m.m_status=?',[fk_t_id,'viewed'],callback);
        },
    sendReplyMessage:function(item,callback)
    {
        db.query('insert into message_reply_tbl values(?,?,?,?,?,?,?)',[item.r_id,item.fk_m_id,item.r_description,item.r_fk_u_id,item.r_date,item.r_fk_t_id,'unviewed'],callback);
    },
    getReplies(callback)
    {
        db.query('select * from message_reply_tbl',callback);
    },
   getUserId(m_id,callback)
   {
       db.query('select * from message_tbl where m_id=?',[m_id],callback);
   },
   getRepliesByid(fk_u_id,fk_t_id,callback)
   {
       db.query('select r.* from message_reply_tbl r where r.r_fk_u_id=? and r.r_fk_t_id=?',[fk_u_id,fk_t_id],callback);
   },
   updateStatus:function(m_id,callback)
    {
        db.query('update message_tbl set m_status=? where m_id=?',['viewed',m_id],callback);
    }
};

module.exports=t_interaction;