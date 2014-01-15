var sample = function (){
var fs = require('fs');
var file_data = fs.readFileSync('test.txt','utf-8');
var obj = file_data.split("\n");
console.log(obj);
}
sample();