var db=require('../dbconnection');
var interaction={

    getMessages:function(callback)
    {
        db.query('select * from message_tbl',callback);
    },
    sendMessage:function(item,callback)
    {
        db.query('insert into message_tbl values(?,?,?,?,?,?)',[item.m_id,item.fk_u_id,item.fk_t_id,item.m_description,item.m_date,'unviewed'],callback);
    },
    getMessagebyId:function(id,callback)
    {
        db.query('select m.*,t.* from message_tbl m,teacher_tbl t where m.fk_u_id=? and t.fk_u_id=m.fk_t_id',[id],callback);
    },
    displayMsgOnStudent(m_id,callback)
    {
        db.query('select r.* from message_reply_tbl r,message_tbl m where r.fk_m_id=m.m_id',[m_id],callback);
    },
    getMessageforDisplay(fk_u_id,fk_t_id,callback)
    {
        db.query('select m.* from message_tbl m where m.fk_u_id=? and m.fk_t_id=?',[fk_u_id,fk_t_id],callback);
    },
    getReply:function(id,callback)
    {
        db.query('select r.*,t.* from message_reply_tbl r,teacher_tbl t where r.r_fk_u_id=? and t.fk_u_id=r.r_fk_t_id and r.r_status=?',[id,'unviewed'],callback);
    },
    getViewedReply:function(id,callback)
    {
        db.query('select r.*,t.* from message_reply_tbl r,teacher_tbl t where r.r_fk_u_id=? and t.fk_u_id=r.r_fk_t_id and r.r_status=?',[id,'viewed'],callback);
    },
    getRepliesByid(r_id,callback)
    {
        db.query('select * from message_reply_tbl where r_id=?',[r_id],callback);
    },
    updateStatus:function(r_id,callback)
    {
        db.query('update message_reply_tbl set r_status=? where r_id=?',['viewed',r_id],callback);
    }
};
module.exports=interaction;