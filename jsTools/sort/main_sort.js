var sort1 = require('./sort_lib.js').sort1;
var fs = require('fs');
var main = function main () {
	var input = sort1.getUserInput(process.argv.slice(2,process.argv.length));
	if(!fs.existsSync(input.fileName)) return 'no such file';

	var text = fs.readFileSync(input.fileName,'utf-8');
	 return  sort1.calculateCounts(text,input);
};
main();
