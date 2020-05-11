var mongoose=require('mongoose');
var url='mongodb://127.0.0.1:27017/movieServer'
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},function(err){
    if(err){
        return console.log(err);
    }
    console.log("数据库连接成功")
});
module.exports=mongoose;