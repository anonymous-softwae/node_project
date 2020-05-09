var mongoose=require('../common/db');
//用户数据集
var user=new mongoose.Schema({
    username:String,
    password:String,
    userMail:String,
    userPhone:String,
    userAdmin:Boolean,
    userPower:Number,
    userStop:Boolean
})
//用户查找方法
user.static.findAll=function(callback){
    this.find({},callback);
};
//使用用户名查找方式
user.static.findByUsername=function(name,callback){
    this.find({username:name},callback);
}
//登录匹配，用户名和密码是否相同且没有处于封停状态
user.static.findUserLogin=function(name,password,callback){
    this.find({username:name,password:password,userStop:false},callback);
};
//验证邮箱、电话和用户名找到用户
user.static.findUserPassword=function(name,mail,phone,callback){
    this.find({username:name,userMail:mail,userPhone:phone},callback);
};
var userModel=mongoose.model('user',user);
module.exports=userModel;