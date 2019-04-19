var db=require('../dbconnection');
var remark={
    viewRemark:function(callback)
    {
        db.query('select * from remark_tbl',callback);
    },
    AddRemark:function(item,callback)
    {
        db.query('insert into remark_tbl values(?,?,?,?,?,?)',[item.r_id,item.r_description,item.r_fk_t_id,'new',item.r_date,item.r_fk_u_id],callback);
    },
    viewRemarkByid:function(id,callback)
    {
        db.query('select r.*,t.* from remark_tbl r,teacher_tbl t where r.r_fk_u_id=? and r.r_status=? and r.r_fk_t_id=t.fk_u_id',[id,'new'],callback);
    },
    updateRemarkStatus:function(id,callback)
    {
        db.query('update remark_tbl set r_status=? where r_id=?',['viewed',id],callback);
      //  db.query('update leave_tbl set l_status=? where fk_u_id=? and l_date=?',['reject',fk_u_id,l_date],callback);
    },
    viewedRemarks:function(id,callback)
    {
        db.query('select r.*,t.* from remark_tbl r,teacher_tbl t where r.r_fk_u_id=? and r.r_status=? and r.r_fk_t_id=t.fk_u_id',[id,'viewed'],callback);        
    }
};

module.exports=remark;