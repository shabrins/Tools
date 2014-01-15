var fs = require('fs');
var fileName = './abc.txt';
console.log(fs.existsSync(fileName));
var stat = fs.statSync(fileName);
console.log(stat);
console.log(fs.readFileSync(fileName,'utf-8'));


var callMeWhenexistsisDone = function(exists){
	console.log(exists);
};

fs.exists(fileName,callMeWhenexistsisDone);

var callMeWhenfstatisDone = function(err,stat){
	console.log(err,stat);
};

fs.stat(fileName,callMeWhenfstatisDone)