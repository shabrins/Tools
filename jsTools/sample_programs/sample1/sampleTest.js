var assert = require('assert');
var test = {};

test.true_and_false_are_not_equal = function(){
	assert.notEqual(false,true);
};

test.true_and_true_are_equal = function(){
	assert.equal(true,true);
};

test.arrays_are_comparable = function(){
	assert.deepEqual([1,2,3],[1,2,3]);
};

var sumup = function(pv,cv){
	return pv+cv;
};
test.sumup_on_1_2_3_gives_sum_as_6 = function(){
	assert.equal(6,[1,2,3].reduce(sumup,0));
};
test.sumup_on_1_2_3_4_gives_sum_as_10 = function(){
	assert.equal(10,[1,2,3,4].reduce(sumup,0));
};
var max = function(pv,cv){
	return pv>cv?pv:cv;
};
test.max_of_4_3_2_1_is_4 = function(){
	assert.equal(4,[1,2,3,4].reduce(max));
};

var isLessThan10 = function(x){
	return x < 10;
};
test.every_number_of_1_2_4_7_is_less_than_10 = function(){
	assert.ok([1,2,4,7].every(isLessThan10));
};

var isGreaterThan6 = function(x){
	return x > 6;
};

test.some_number_of_1_2_4_7_is_greater_than_6 = function(){
	assert.ok([1,2,4,7].some(isGreaterThan6));
};
exports.test = test;