var bc=require('./bc_lib.js').bc;
var fs=require('fs');
var main=function(){
    var text = bc.fs.readFileSync('catalog.txt','utf-8');
	var input=bc.getUserInput(process.argv.slice(2,process.argv.length));
	if(typeof(input)=='string')
	   return input;
	if(input.help) 
	   return fs.readFileSync('help.txt','utf-8');
	return bc.calculateResult(text,input);
}

console.log(main());