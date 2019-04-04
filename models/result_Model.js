var db=require('../dbconnection');
var result={
    Addresult:function(item,callback)
    {
   //     db.query('insert into result_tbl values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[item.r_id,item.fk_u_id,item.r_class,item.r_div,item.r_sub1,item.r_mark1,item.r_sub2,item.r_mark2,item.r_sub3,item.mark3,item.r_sub4,item.mark4,item.r_sub5,item.r_mark5,item.r_examtype],callback);
   var value=[];
   for (let i = 0; i < item.length; i++) {
       value[i]=[item[i].r_id,item[i].fk_u_id,item[i].r_class,item[i].r_div,item[i].r_sub1,item[i].r_mark1,item[i].r_sub2,item[i].r_mark2,item[i].r_sub3,item[i].r_mark3,item[i].r_sub4,item[i].r_mark4,item[i].r_sub5,item[i].r_mark5,item[i].r_examtype];
   }
   //db.query('insert into stu_attendance_tbl (s_a_id,fk_u_id,s_a_status,s_a_date) values ?',[value],callback);    
   db.query('insert into `result_tbl` (`r_id`,`fk_u_id`,`r_class`,`r_div`,`r_sub1`,`r_mark1`,`r_sub2`,`r_mark2`,`r_sub3`,`r_mark3`,`r_sub4`,`r_mark4`,`r_sub5`,`r_mark5`,`r_examtype`) values ?',[value],callback);
   console.log(value);
       
},
getResults(callback)
{
db.query('select * from result_tbl',callback);
},
    getresultbyclassdiv:function(r_class,r_div,callback)
    {
        db.query('select * from result_tbl where r_class=? and r_div=?',[r_class,r_div],callback);
    },
    updateresult:function(item,fk_u_id,callback)
    {
            return db.query('update result_tbl set r_class=?,r_div=?,r_sub1=?,r_mark1=?,r_sub2=?,r_mark2=?,r_sub3=?,r_mark3=?,r_sub4=?,r_mark4=?,r_sub5=?,r_mark5=?,r_examtype=? where fk_u_id=?',[item.r_id,item.r_class,item.r_div,item.r_sub1,item.r_mark1,item.r_sub2,item.r_mark2,item.r_sub3,item.mark3,item.r_sub4,item.mark4,item.r_sub5,item.r_mark5,item.r_examtype,fk_u_id],callback);
    },
    deleteresult:function(fk_u_id,callback)
    {
        db.query('delete from result_tbl where fk_u_id=?',[fk_u_id],callback);
    },
    getStudentByclassdiv:function(c_no,d_name,callback)
    {
        db.query('select s.* from student_tbl s,class_tbl c,division_tbl d where s.s_class=c.class_number and s.s_class=? and s.s_div=d.div_name and s.s_div=?',[c_no,d_name],callback);
    },
    getResultByID(fk_u_id,r_examtype,callback)
    {
        db.query('select * from result_tbl where fk_u_id=? and r_examtype=?',[fk_u_id,r_examtype],callback);
    }

};
module.exports=result;