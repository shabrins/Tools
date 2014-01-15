var test = require('./example.js');


var a1=[1,2,3];
var a2=[0,2,3];
var a3=[1,2,3];


console.log("expected : true  actual :"+test.areArraySame(a1,a3)) ;
console.log("expected : false  actual :"+test.areArraySame(a2,a3)) ;
console.log("expected : true  actual :"+test.areArraySame(a2,a2)) ;
console.log("expected : false  actual :"+test.areArraySame(a3,a2)) ;