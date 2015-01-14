/**
 * Created by luzhen on 14-12-16.
 */
var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var wordsSchema=new Schema({
    author:{type:String,default:'匿名用户'},
    content:{type:String},
    create_time:{type:Date,default:Date.now}
});

mongoose.model('Words',wordsSchema);

