var http=require('http');
var url=require('url');
var server=http.createServer(function(req,res){
    
    //get url and parse
var parsedurl=url.parse(req.url,true);

    //get path of the url
var path=parsedurl.pathname;
var trimedpath=path.replace(/^\/+|\/+$/g,'');
// GET HTTP METHOD

var method=req.method.toLocaleLowerCase();

    //send response
    res.end("hello world");

    //log the request path
console.log("req rcvd on path :"+ trimedpath + 'with method: ' + method);

    
    
    
    
});

server.listen(5000,function(){
    console.log('server listening on port 5000');
});