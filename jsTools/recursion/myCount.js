//process.argv.forEach(function(val, index, array) {
  //console.log(index + ': ' + val);
//});


var fs = require('fs');
var fileName = './abc.txt';
//console.log(fs.existsSync(fileName));
var myCount = function(){
var lines= fileName.split('\n');
for (var i= lines.length; i-->0;)
    if (lines[i].match(/"/g).length%2===1)
        lines.splice(i-1, 2, lines[i-1]+lines[i]);
var rowsn= lines.length;
console.log(rowsn);
}