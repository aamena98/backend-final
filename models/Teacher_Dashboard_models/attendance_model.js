var db=require('../../dbconnection');
var s_attendance={
    AddAttendance:function(item,callback)
    {
        var value=[];
        for (let i = 0; i < item.length; i++) {
            value[i]=[item[i].s_a_id,item[i].fk_u_id,item[i].s_a_status,item[i].s_a_date];
        }
        db.query('insert into stu_attendance_tbl (s_a_id,fk_u_id,s_a_status,s_a_date) values ?',[value],callback);    
            console.log(value);
        
        // for(let i=0;i<item.length;i++){
        //     value[i]=[item[i].qty,item[i].price,item[i].fk_dish_id,item[i].fk_bill_no,item[i].remark];
        // }
        // console.log(value);
        // return db.query('insert into bill_detail (qty,price,fk_dish_id,fk_bill_no,remark) values ?',[value],callback);       
    },
    updateAttendance:function(item,callback)
    {
        //var date = Date.parse(item.s_a_date); 
        var uparr=[];
        console.log(item);
        var date=new Date(item[0].s_a_date);
        console.log(item[0].s_a_date);
        console.log(date.toLocaleDateString());
       // console.log(item.s_a_date.toLocaleDateString());
        for (let i = 0; i < item.length; i++) {
           uparr.push(item[i].fk_u_id);
        }
        // var today=new Date(value.s_a_date);
        db.query('update stu_attendance_tbl set s_a_status=false where s_a_date=? and fk_u_id in(?)',[date.toLocaleDateString(),uparr],callback);    
        
    //    console.log(value);
        //console.log(value);     upsade attendance_tbl set status="absent" where fk_u_id and s_a_date in (?)",[today.tolocaaleDateString,arr)]
        //today.toLoocaleDateString()     SELECT * FROM `tbl_name` where DATE(column_name) = DATE('2016-01-14')
    },
    getStudentByclassdiv:function(c_no,d_name,callback)
    {
        db.query('select s.* from student_tbl s,class_tbl c,division_tbl d where s.s_class=c.class_number and s.s_class=? and s.s_div=d.div_name and s.s_div=?',[c_no,d_name],callback);
    },
    getStudentAttendance:function(callback)
    {
        db.query('select * from stu_attendance_tbl',callback);
    },
    getAttendancebyUserid:function(fk_u_id,callback)
    {
        db.query('select * from stu_attendance_tbl where fk_u_id=?',[fk_u_id],callback);
    }
};
module.exports=s_attendance;