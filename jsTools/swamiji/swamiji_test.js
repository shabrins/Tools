var assert=require('assert');
var fake = require('./swamiji.js').fake;
var  test = {};

var fakerollDice = function(num){
	return function(){return num;};
}

test.swamiji_will_give_1=function(){
	assert.equal('num is 1',fake.swamiji(fakerollDice(1)));
}
test.swamiji_will_give_2=function(){
	assert.equal('num is 2',fake.swamiji(fakerollDice(2)));
}
test.swamiji_will_give_3=function(){
	assert.equal('num is 3',fake.swamiji(fakerollDice(3)));
}
test.swamiji_will_give_4=function(){
	assert.equal('num is 4',fake.swamiji(fakerollDice(4)));
}
test.swamiji_will_give_5=function(){
	assert.equal('num is 5',fake.swamiji(fakerollDice(5)));
}
test.swamiji_will_give_6=function(){
	assert.equal('num is 6',fake.swamiji(fakerollDice(6)));
}

exports.test=test;