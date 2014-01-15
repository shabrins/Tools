var count=0;
var fail=0;
var Result= function(record,Expected,actual){
	count++;
	if (Expected!=actual){
		fail++;
		console.log("\nTest failed");
		console.log('Expected:',expected,'\nrecord\t',record,'\nresult\t',actual,'\n');
	}
};
var summarize=function(){
	console.log(fail+'/'+count+'failed');
};
exports.Result=Result;
exports.summarize=summarize;