var cut = function(record,delimeter,field_num){
	var record;
	record = record.split(",");
	if(field_num>record.length)
		return "blank";
	if(delimeter="")
	return record[field_num-1];
}
var record = "mritunjay,123,UP,india";
console.log("record:",record,"expected o/p:123 and the actuall o/p is = ",cut(record,",",2));
console.log("record:",record,"expected o/p:UP and the actuall o/p is = ",cut(record,",",3));
console.log("record:",record,"expected o/p:mritunjay and the actuall o/p is = ",cut(record,",",1));
console.log("record:",record,"expected o/p:india and the actuall o/p is = ",cut(record,",",4));
console.log("record:",record,"expected o/p:blank and the actuall o/p is = ",cut(record,",",5));
console.log("record:",record,"expected o/p:blank and the actuall o/p is = ",cut(record,",",6));