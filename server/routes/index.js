var express = require('express');
var router = express.Router();
// var mongoose=require('mongoose')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// //定义路由
// router.get('/dbtest',function(req,res,next){
//   mongoose.connect('mongodb://localhost/pets',{useMongoClient:true});
//   mongoose.Promise=global.Promise;
//   var Cat=mongoose.model('Cat',{name:String,age:String});
//   var tom=new Cat({name:'Tim',age:10});
//   tom.save(function(err){
//     if(err){
//       console.log(err);
//     }else{
//       console.log('success insert');
//     }
//   });
//   res.send('db connect success...');
// });

module.exports = router;
