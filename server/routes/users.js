var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.post('/register',function(req,res,next){

  if(!req.body.username){
    res.json({status:1,message:'用户名为空'})
    return
  }
  if(!req.body.password){
    res.json({status:1,message:'密码为空'})
    return
  }
  if(!req.body.userMail){
    res.json({status:1,message:'用户邮箱为空'})
    return
  }
  if(!req.body.userPhone){
    res.json({status:1,message:'用户手机为空'})
    return
  }

  user.findByUsername(req.body.username,function(err,userdata){
    if(userdata.length!=0){
      res.json({status:1,message:'用户名已存在'})
    }else{
      var registerUser=new user({
        username:req.body.username,
        password:req.body.password,
        userMail:req.body.userMail,
        userPhone:req.body.userPhone,
        userAdmin:false,
        userRight:0,
        userStop:false
      })
      registerUser.save(function(err){
        if(err){
          console.log(err)
        }else{
          res.json({status:1,message:'用户注册成功'})
        }
     });
  }
})

})

module.exports = router;
