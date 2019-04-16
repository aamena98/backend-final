var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var student=require('./routes/StudentRoutes/student_routes');
var profilepic=require('./routes/StudentRoutes/profilepic_routes');
var login=require('./routes/LoginRoutes/login_routes');
var teacher=require('./routes/TeacherRoutes/Teacher_route1');
var t_profile=require('./routes/TeacherRoutes/Teacher_profilepic');
var users=require('./routes/user_route');
var notice=require('./routes/notice_route');
var s_attendance=require('./routes/Teacher_Dashboard_Routes/s_attendance_routes');
var classTeacher=require('./routes/classTeacher_routes');
var classTeacher1=require('./routes/classTeacher_route1');
var div=require('./routes/division_routes');
var result=require('./routes/result_routes1');
var studentclass=require('./routes/class_routes');
var result1=require('./routes/result_routes');
var interact=require('./routes/PT_interaction_routes');
var s_attendance1=require('./routes/Teacher_Dashboard_Routes/s_attendance_route1');
var t_interact=require('./routes/Teacher_Dashboard_Routes/Teacher_interaction_routes');
var t_interact1=require('./routes/Teacher_Dashboard_Routes/T_interaction_routes');
var t_interact2=require('./routes/Teacher_Dashboard_Routes/T_interaction_routes1');
var reply1=require('./routes/Teacher_Dashboard_Routes/Reply_routes');
var leave=require('./routes/Leave_Routes');
var leave1=require('./routes/Leave_Routes1');
var leave2=require('./routes/Leave_Routes2');
var leave3=require('./routes/Leave_Routes3');
var leave4=require('./routes/LeaveRoute4');
var leave5=require('./routes/LeaveRoute5');
var reply=require('./routes/reply_routes');
var s_interact=require('./routes/StudentInteractionRoutes');
var viewedReply=require('./routes/studentReplyRoutes');
var login=require('./routes/LoginRoutes/login_routes');
var timetable=require('./routes/studentTimeatbelroutes');
var notes=require('./routes/notes_routes');
var unotes=require('./routes/update_notes_routes');
var hw=require('./routes/homeWork_routes');
var emailv=require('./routes/email_varify_route');
var updatepass=require('./routes/updatePassword_Routes');
var userUpdate=require('./routes/user_route1');
var addhw=require('./routes/add_homework_route');
var viewonad=require('./routes/studentviewAdmin_routes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students',student);
app.use('/profile',profilepic);
app.use('/login',login);
app.use('/teacher',teacher);
app.use('/tprofile',t_profile);
app.use('/user',users);
app.use('/notice',notice);
app.use('/s_attendance',s_attendance);
app.use('/classTeacher',classTeacher);
app.use('/classTeacher1',classTeacher1);
app.use('/div',div);
app.use('/result',result);
app.use('/studentclass',studentclass);
app.use('/getresult',result1);
app.use('/interact',interact);
app.use('/s_attendance1',s_attendance1);
app.use('/t_interact',t_interact);
app.use('/t_interact1',t_interact1);
app.use('/reply',reply1);
app.use('/leave',leave);
app.use('/leaveAccept',leave1);
app.use('/leaveReject',leave2);
app.use('/pendingleaves',leave3);
app.use('/viewAcceptedLeave',leave4);
app.use('/viewRejectedLeave',leave5);
app.use('/replyDisplay',reply);
app.use('/studentInteract',s_interact);
app.use('/viewedMessages',t_interact2);
app.use('/viewedReply',viewedReply);
app.use('/timeTable',timetable);
app.use('/notesAddGetDelete',notes);
app.use('/updateNotes',unotes);
app.use('/homework',hw);
app.use('/emailvarify',emailv);
app.use('/updatepass',updatepass);
app.use('/userupdate',userUpdate);
app.use('/addhw',addhw);
app.use('/viewstuonadmin',viewonad);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
