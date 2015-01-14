var Words=require('../models').Words;
var tools=require('../lib/tools');
var config=require('../config');
exports.getWords=function(pageNum,callback){

    Words.find().lean(true).skip(config.pageSize*(pageNum-1)).limit(config.pageSize).sort({'create_time':-1}).exec(function(err,words){
        if(err){
            callback(err);
        }else{
            for(var index in words){
                words[index].create_time=tools.formatDate(words[index].create_time,true);
            }
            callback(null,words);
        }
    });
};

exports.editWords= function (word,callback) {
    var newWord=new Words(word);
    newWord.save(function (err,result) {
        if(err){
            callback(err);
        }else{
            callback(null,result);
        }
    });
}

