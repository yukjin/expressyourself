/**
 * Created by luzhen on 14-12-16.
 */
var wordsUtil=require('../lib/wordsUtil');


exports.getWords= function (req,res,next) {
    var pageNum=req.params.pageNum||1;
    wordsUtil.getWords(pageNum,function (err,result) {
        if(err){
            console.log(err)
        }else{
            res.render('index',{words:result,currPage:pageNum});
        }
    })
};


