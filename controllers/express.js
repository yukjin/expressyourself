/**
 * Created by luzhen on 14-12-16.
 */
var wordsUtil=require('../lib/wordsUtil');
exports.showEdit= function (req,res,next) {
    res.render('edit');
};

exports.edit= function (req,res,next) {
    var content=req.body.content||'';

    if(content===''){
        req.flash('error','内容不能为空');
        res.redirect('/edit');
    }else{
        wordsUtil.editWords({'content':content},function (err, result) {
            if(err){
                console.log(err);
                console.log(result);
            }else{
                res.redirect('/');
            }
        })
    }

}