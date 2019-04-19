var db=require('../dbconnection');
var leave={
        
    AddLeave:function(item,callback)
    {
        console.log('model'+item.l_date);
        db.query('insert into leave_tbl values(?,?,?,?,?,?,?,?,?,?)',[item.l_id,item.fk_u_id,item.l_fromdate,item.l_todate,item.l_totaldays,item.l_leavetype,item.l_description,item.fk_t_number,'pending',item.l_date],callback);
    },
    getLeaves:function(callback)
    {
        db.query('select * from leave_tbl',callback);
    },
    getAllinfo:function(fk_t_id,callback)
    {
       // db.query('select s.*,l.* from student_tbl s,leave_tbl l where s.fk_u_id=l.fk_u_id and l.fk_u_id=?',[fk_u_id],callback);        
        db.query('select s.*,l.* from student_tbl s,leave_tbl l where s.fk_u_id=l.fk_u_id and l.l_status=? and l.fk_t_number=?',["pending",fk_t_id],callback);       
    },      
    updateAcceptStatus:function(fk_u_id,l_date,callback)
    {
        db.query('update leave_tbl set l_status=? where fk_u_id=? and l_date=?',['accept',fk_u_id,l_date],callback);
    },
    updateRejectStatus:function(fk_u_id,l_date,callback)
    {
        db.query('update leave_tbl set l_status=? where fk_u_id=? and l_date=?',['reject',fk_u_id,l_date],callback);
    },
    getAcceptedLeaves:function(fk_t_number,callback)
    {
        db.query('select * from leave_tbl where fk_t_number=? and l_status=?',[fk_t_number,'accept'],callback);
    },
    getRejectedLeaves:function(fk_t_number,callback)
    {
        db.query('select * from leave_tbl where fk_t_number=? and l_status=?',[fk_t_number,'reject'],callback);
    },
    getPendingLeaves:function(fk_t_number,callback)
    {
        db.query('select * from leave_tbl where fk_t_number=? and l_status=?',[fk_t_number,'pending'],callback);
    },
    getAllAccepted:function(fk_t_id,callback)
    {
        db.query('select s.*,l.* from student_tbl s,leave_tbl l where s.fk_u_id=l.fk_u_id and l.l_status=? and l.fk_t_number=?',["accept",fk_t_id],callback);        
    },
    getAllRejected:function(fk_t_id,callback)
    {
        db.query('select s.*,l.* from student_tbl s,leave_tbl l where s.fk_u_id=l.fk_u_id and l.l_status=? and l.fk_t_number=?',["reject",fk_t_id],callback);        
    },
    getAcceptedLeavesforStudent:function(fk_u_id,callback)
    {
        db.query('select * from leave_tbl where fk_u_id=? and l_status=?',[fk_u_id,'accept'],callback);
    },
    getRejectedLeavesforStudent:function(fk_u_id,callback)
    {
        db.query('select * from leave_tbl where fk_u_id=? and l_status=?',[fk_u_id,'reject'],callback);
    }
};


module.exports=leave;