var sample = function (){
var fs = require('fs');
var file_data = fs.readFileSync('one.array','utf-8');
file_data[0]=file_data[0].slice(1,file_data[0].length);
console.log(file_data);
}
sample();
