var express=require('express');
var app=express();

app.get('/',function(req,res){
	res.send("Hello all... Welcome to Node.JS code");
	res.end();
});

app.listen(process.env.PORT || 3000);
