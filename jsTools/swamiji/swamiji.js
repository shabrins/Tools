var fake={};
fake.rollDice = function(){
	var min = 1;
	var max=6;
	return (Math.floor(Math.random()*max)+min);
}
fake.swamiji = function(rollDice){
	var result = rollDice();
		if(result==1)
			return 'num is 1';
		if(result==2)
			return 'num is 2';
		if(result==3)
			return 'num is 3';
		if(result==4)
			return 'num is 4';
		if(result==5)
			return 'num is 5';
		if(result==6)
			return 'num is 6';
		if(result=='')
			return 'num is null';
}
exports.fake=fake;