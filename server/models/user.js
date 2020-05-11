var mongoose=require('../common/db');
var Schema=mongoose.Schema;
//用户数据集
var userSchema=new Schema({
    username:String,
    password:String,
    userMail:String,
    userPhone:String,
    userAdmin:Boolean,
    userRight:Number,
    userStop:Boolean
})
//用户查找方法
userSchema.statics.findAll=function(callback){
    this.find({},callback);
};
//使用用户名查找方式
userSchema.statics.findByUsername=function(name,callback){
    this.find({username:name},callback);
}
//登录匹配，用户名和密码是否相同且没有处于封停状态
userSchema.statics.findUserLogin=function(name,password,callback){
    this.find({username:name,password:password,userStop:false},callback);
};
//验证邮箱、电话和用户名找到用户
userSchema.statics.findUserPassword=function(name,mail,phone,callback){
    this.find({username:name,userMail:mail,userPhone:phone},callback);
};
var userModel=mongoose.model('user',userSchema);
module.exports=userModel;