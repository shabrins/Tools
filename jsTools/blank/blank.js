var fs = require('fs');

var reduce_blank = function(){
	var	fileName = './a.txt',readFile=0;
	 if(fs.existsSync(fileName)==true)
	{
	  readFile=fs.readFileSync(fileName,'utf-8');
	  console.log=(readFile);
	}
	 var splitString= function()
	{
	 var array = fileName.split(" ");
	 console.log(array);
	}
	 var joinString = function()
	{
	 var afterJoin= array.join(" ");
	 var source=source.afterJoin();
	 console.log(source);
    }
	 var destination = function()
	 {
      fs.writeFileSync('b.txt','source');
	 }
}
 reduce_blank();

 exports.splitString=splitString;
 exports.joinString=joinString;