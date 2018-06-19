/*
*primary file for api
*/
//dependencies

var http=require('http');
var url=require('url');
var stringdecoder=require("string_decoder").StringDecoder;

http.createServer(function(request,response){

// get url and parse
var parsedURL = url.parse(request.url,true);
// get the path
var path=parsedURL.pathname;
var trimmedpath=path.replace(/^\/+|\/+$/g,'');

//get query string as object

var queryobj=parsedURL.query;

//get http method

var method=request.method.toLowerCase();

// get the headers as an obj

var headers=request.headers;
//get payload if any

var decoder=new StringDecoder('utf-8');
var buffer='';


// send response

response.end("hello\n");

// log req path
console.log('req rcvd on path: ' +trimmedpath+'with method:'+method+'with this query stirng',queryobj);
console.log('request rcvd with headers ',headers);
    

}).listen(3000);

console.log('server is listening on port 3000');