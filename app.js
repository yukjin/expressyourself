/**
 * Created by luzhen on 14-12-16.
 */
var express=require('express');
var bodyParser=require('body-parser');
var session=require('express-session');
var flash = require('connect-flash');
var app=express();
var router=require('./router');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: 'expressyourself', // 建议使用 128 个字符的随机字符串
    cookie: { maxAge: 60 * 1000*30},
    resave:true,
    saveUninitialized:true
}));
app.use(flash());
app.use(function(req, res, next){
    res.locals.user = req.session.user;
    var error = req.flash('error');
    res.locals.error = error.length ? error : null;
    var success = req.flash('success');
    res.locals.success = success.length ? success : null;
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.listen(3000, function () {
    console.log('server has listened');
});