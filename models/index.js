/**
 * Created by luzhen on 14-12-16.
 */
var mongoose=require('mongoose');
var config=require('../config');

mongoose.connect(config.db, function (err) {
    if(err){
        console.error('connect to mydb error'+err.message);
    }
});

require('./words');

exports.Words=mongoose.model('Words');