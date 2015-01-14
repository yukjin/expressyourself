/**
 * Created by luzhen on 14-12-16.
 */
var express=require('express');
var router = express.Router();
var site=require('./controllers/site');
var exp=require('./controllers/express');
router.get('/:pageNum?',site.getWords);
router.get('/words/edit',exp.showEdit);
router.post('/words/edit',exp.edit);
module.exports=router;
