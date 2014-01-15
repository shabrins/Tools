var fs=require('fs');
var http = require('http');
var main=function(){
	httpServer = http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		var dataObject=JSON.parse(fs.readFileSync('comment.txt','utf-8'));
		var key=Object.keys(dataObject);
		for(count=1;count<=key.length;count++){
			res.write(dataObject[count].name+" -> "+ dataObject[count].comment+"<br>");
		}
		res.write('<head><link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /></head>')
		res.write('<form action="http://10.4.31.109:8080">')
		res.write('<input type="text"  name="name">');
		res.write('<input type="text"  name="comment">');
		res.write('<input type="submit" value="Comment">');
		console.log(req.url);
		res.end();
	});
	httpServer.listen(8080);
	console.log('Server running at http://10.4.31.109:8080/');
}
main();