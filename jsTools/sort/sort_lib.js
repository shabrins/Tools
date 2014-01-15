var sort1 = {};

sort1.byAscendingOrder = function (text) {
  return text.sort(function(a,b){return a>b;});
};

sort1.byDescendingOrder = function (text) {
  return text.sort(function(a,b){return a<b;});
};

sort1.byLines = function (text) {
    var result=text.split("\n").sort(function(a,b){
      return a>b;
    });
	return result.join("\n");
};

sort1.reverseByLines = function (text) {
    var res=text.split("\n").sort(function(a,b){
      return a<b;
    });
	return res.join("\n");
};

sort1.byNumber = function (text){
	  var result =text.sort(function(a,b){return a-b;});
    return result;
};

sort1.byField_and_Num = function(text,fieldNum,delimiter,by_n,reverse){
  var firstValue;
  var secondValue;

  if(!delimiter)
     delimiter = " ";  

  var compare = function(first,second){
    if(by_n){

       firstValue = +(first.split(delimiter)[fieldNum-1]);
       secondValue = +(second.split(delimiter)[fieldNum-1]); 
     }
      else{

      firstValue = first.split(delimiter)[fieldNum-1];
      secondValue = second.split(delimiter)[fieldNum-1];
    }

    if(firstValue > secondValue)
      return 1;
    if(firstValue < secondValue)
      return -1;
    else
      return 0; 
  }
  var content = text.split("\n").sort(); 
  content.sort(compare);
  if(reverse)
    return content.reverse().join("\n");
  return content.join('\n');
};

sort1.checkUnorderText=function(text,delimiter){
  var content= text.split("\n");
  for (var i = 0; i <= content.length-1; i++){
    if(content[i]<content[i+1])
      continue;
    return content[i+1];
  }
};    

sort1.checkUnorder_for_reverse_Text=function(text,delimiter){
  var content= text.split("\n");
  for (var i = 0; i <= content.length-1; i++){
    if(content[i]>content[i+1])
      continue;
    return content[i+1];
    }
};    

var doesNotStartWithminus = function(text){
  return text.charAt(0) != '-';
};

var startsWithMinus = function(text){
  return text.charAt(0) == '-';
};

var is_sort = function(text){
  return text;
};

var is_r = function(text){
 return text == '-r';
};

var is_n = function(text){
 return text == '-n';
};

var is_t = function(text){
 return text == '-t';
};

var is_c = function(text){
 return text == '-c';
};


sort1.getUserInput = function(args){
  var result = {
    sort_default:true,
    check:false,
    separator:false,
    separatorValue:null,
    reverse:false,
    numberSort:false
  };

  var nonOptions = args.filter(doesNotStartWithminus);
  result.fileName = nonOptions[0];
  
  var options = args.filter(startsWithMinus);

  if(options.length == 0) return result;
  result.sort_default = true;
  result.separator = options.some(is_t);
  result.reverse = options.some(is_r);
  result.check = options.some(is_c);
  result.numberSort = options.some(is_n);


  return result;
};

var is_k = function(text){
  if(text.charAt(1)=='k') 
    return text;
};

var is_fieldNumber = function(text){
  return text.substr(2,2);
}

sort1.getUserInput_forFields = function(args){
  var result = {};
  
  var nonOptions = args.filter(doesNotStartWithminus);
  result.fileName = nonOptions[2];
  
  var options = args.filter(startsWithMinus);

  if(options.length == 0) return result;
   result.byFields = options.some(is_k);
   
  for(var i=0;i<args.length;i++)
  {
   if(is_k(args[i]))
    result.fieldNumber  = is_fieldNumber(args[i]);
  }
  return result;
};


sort1.calculateCounts = function(text,input){
  if(input.fileName)
    console.log(sort1.byLines(text)); 
  if(!input.delimiter)
    input.delimiter=' ';
  if(!input.fields)
    input.fields=1;
   text=text.split('\n');
  if(input.Numeric) return sort1.byField_and_Num(text,input);
  if(input.fields)
    return sort1.byField_and_Num(text,input);
 };




exports.sort1 = sort1;


