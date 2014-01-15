var read_data = function  (text) {
	 process.stdin.resume();
     process.stdin.setEncoding('utf8');
     process.stdin.on('data', function(chunk){
     process.stdout.write('data: ' + chunk);});
     process.stdin.on('end', function() {
     process.stdout.write('end');
     });
}
var to_cut= function () {

var lines=Split the content by '\n'.
var counter=0;
    for(counter=0;counter=lines.length;counter++)
      {

      }

split the array[i] by the delimiter:
       data= lines(counter).split(delimeter)
			
print selected field of the content by user.
       Result=0;
       cut_result=data+Result[field]+\n;
}