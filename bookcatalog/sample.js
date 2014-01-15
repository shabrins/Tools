var fs = require('fs');
var main = function(){
	var content = fs.readFileSync('catalog.txt','utf-8');
	var x = JSON.parse(content);
	
	console.log(x);
	console.log(Object.keys(x));	
	console.log(Object.keys(x.book));
	var y = {	
				               book:{
                      "8172234988":{
                                   Price:200,
                                   Author:"Paulo Coelho",
                                   Title:"The Alchemist",
                                   Publication:"Harper Collins Publishers"
                                  },

                      "0007299806":{
                                   Price:144,
                                   Author:"Agatha Christie",
                                   Title:"The Clocks",
                                   Publication:"Harper Collins UK"
                                  }
        
            }
        }
	var dataToWrite = JSON.stringify(y); 
	console.log(JSON.stringify(y));
	fs.writeFileSync('two.txt',dataToWrite);

};
main();


var getDataDetails = function(isbn,innerObject){
  var data = bc.readData();
  innerObject = Object.keys(data);
  result = [];
  result.push(isbn,innerObject['price'],innerObject['author'],innerObject['title'],innerObject['publication']);
  return result;
}














bc.book_list = function(){
  var header = 'ISBN;Price;Author;Title;Publication\n\r';
  var data = bc.readData();
  var keys = Object.keys(data);
    console.log(keys,"im keys");
  var result = [];
  keys.every(function(keyArray){
    console.log(keyArray,"hhhhhhhhhhhhhh");
    console.log(getDataDetails(keyArray,data[keys]),"im running");
    result.push(getDataDetails(keyArray,data[keys].join(',')));
  })
  console.log(header+result.join('\n\r'));
  return header+result.join('\n\r');
}