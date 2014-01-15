var onComplete = function() {
	console.log('done at',new Date());
};


var onEveryTime = function(){
	console.log('everytime', new Date());
	count++;
	if(count > 5) clearInterval(x);
}

setTimeout(onComplete,0);
console.log('begin', new Date());
setTimeout(onComplete,2000);
setTimeout(onComplete,1000);
setTimeout(onComplete,3000);
console.log('end', new Date());

var x = setInterval(onEveryTime, 2000);
var count = 0;







