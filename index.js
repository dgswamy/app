var http=require('http');
var url=require('url');
var stringdecoder=require('string_decoder').stringdecoder;
var server=http.createServer(function(req,res){
    
    //get url and parse
var parsedurl=url.parse(req.url,true);

    //get path of the url
var path=parsedurl.pathname;
var trimedpath=path.replace(/^\/+|\/+$/g,'');
//get the query string as an object

var querystringobject=parsedurl.query;

// GET HTTP METHOD

var method=req.method.toLocaleLowerCase();
//get method as objects

var headers=req.headers;

//get payload if any

var decoder= new stringdecoder('utf-8');
var buffer='';
req.on('data',function(data){
    buffer+=decoder.write(data);
});
req.on('end',function(){
    buffer+= decode.end();

});

    //send response
    res.end("hello world");

    //log the request path
//console.log("req rcvd on path :"+ trimedpath + 'with method: ' + method + "with this query string objects : ",querystringobject,'request with these heasders: ',headers);

  console.log("request rcvd with payload : ",buffer);  
    
    
    
});

server.listen(5000,function(){
    console.log('server listening on port 5000');
});