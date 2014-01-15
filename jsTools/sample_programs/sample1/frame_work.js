var total_count = 0;
var total_failed = 0;

var compare_result = function  (expected,actual){
	total_count++;
	if(expected != actual){
		total_failed++;
	console.log("TEST FAILED");
	console.log("expected :" ,expected, "actual:" ,actual);
    }
}


var summarize = function () {
	console.log(total_count-total_failed+'/'+total_count +"   PASSED");
}

exports.compare_result=compare_result;
exports.summarize=summarize;