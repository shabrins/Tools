var test = require('./example.js');
var frame = require('./frame_work.js');


var arr1=[1,2,3];
var arr2=[0,2,3];
var arr3=[1,2,3];

frame.compare_result(true,test.areArraySame(arr1,arr3));
frame.compare_result(false,test.areArraySame(arr2,arr3));
frame.compare_result(true,test.areArraySame(arr1,arr1));
frame.compare_result(true,test.areArraySame(arr3,arr2));
//frame.compare_result(6,test.arr1.reduce(sumUp()));

frame.summarize();