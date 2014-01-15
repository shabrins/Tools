var f1 = function  (a,b) {
	console.log("f1:", a+b);};

var f2 = function  (a,b) {
	console.log("f2:", a+b);};

var f3 = function  (a,b) {
	console.log("f3:", a+b);};

var f4 = function  (a,b) {
	console.log("f4:", a+b);};

var f5 = function  (a,b) {
	console.log("f5:", a+b);};

var function_callback = function(element){
	var random1 = (Math.floor(Math.random()*100));
	console.log(random1);
	var random2 = (Math.floor(Math.random()*100));
	console.log(random1);
    return element(random1,random2);
};

var functionArray=[f1, f2, f3, f4, f5];
 functionArray.forEach(function_callback);