var lib = require('./mainCut');
var test = require('./testStatus');
var cutRecordWithSingleRecord=function(fields,delimiters){
	var record=fields.join(delimiters);
	if(!delimiters)
		record=fields.join(' ');
	test.Result(record,'Maharashtra',lib.getFields(record,3,delimiters));
	test.Result(record,'123',lib.getFields(record,2,delimiters));
};
var main=function(){
	var record= ['Kajal',123,'Maharashtra','India'];
	cutRecordWithSingleRecord(record,',');
	cutRecordWithSingleRecord(record,' ');
	cutRecordWithSingleRecord(record,'\t');
	cutRecordWithSingleRecord(record);
	test.summarize();
};
main();