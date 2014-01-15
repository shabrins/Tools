/*test.getUserInput_ShouldProcessFieldsAndFileOptions = function(){
	var expectedUserInput={fileName:"file.txt",byFields:true,fieldNumber:2};
	var userInput=sort.getUserInput(["node","main_sort.js", "file.txt", "-k2"]);
	assert.deepEqual(expectedUserInput,userInput);
};

test.getUserInput_ShouldProcessFieldsAndFileOptionsSpecifiedInDifferentOrder = function(){
	var expectedUserInput={fileName:"file.txt",byFields:true,fieldNumber:1};
	var userInput=sort.getUserInput(["node","main_sort.js","-k1", "file.txt"]);
	assert.deepEqual(expectedUserInput,userInput);
};*/


 if(byNumber){
      firstValue = +(first.split(delimiter)[fieldNum-1]);
      secondValue = +(second.split(delimiter)[fieldNum-1]); 
    }
    else{
      firstValue = first.split(delimiter)[fieldNum-1];
      secondValue = second.split(delimiter)[fieldNum-1];
    }



sort.byFields=function(text,fieldNum,delimiter,reverse){
  var content= text.split("\n").sort(); 
  var compare=function(first,second){
      var firstValue = first.split(delimiter)[fieldNum-1];
      var secondValue = second.split(delimiter)[fieldNum-1];
  }
  content.sort(compare);
  return content.join('\n');
};




}
       else
       {
       firstValue = firstElement.split(delimter)[field-1];
       secondValue = secondElement.split(delimter)[field-1];
       }

      if(firstValue > secondValue)
        return 1;
      if(firstValue < secondValue)
        return -1;
      else
        return 0;
  }
  splitcontent.sort(compare);
  return splitcontent.join('\n');
};

var doesNotStartWithminus = function(text){
  return text.charAt(0) != '-';
};

var startsWithMinus = function(text){
  return text.charAt(0) == '-';
};

var is_r = function(text){
  return text == '-r';
};


var is_n = function(text){
  return text == '-n';
};


var is_k = function(text){
  return text.charAt(1)=='k';
};

var is_t = function(text){
  return text.charAt(1)=='t';
};


var getdelimiter = function(text)
{
  if(text.charAt(1)=='t')
    return text; 
}

var getValue = function(text)
{
  if(text.charAt(1)=='k')
    return text; 
}


st.getUserInput = function(args){
  var result = {
          fileName:"",  
          defaultSort:true,
          reverseSort:false,
          fieldBysort:false,
          fieldvalue:null,
          numberSort:false,
          delimiter:false,
          delimiterValue:null,
          Checksort:false 
   };
   //console.log(args[1]);
  var nonOptions = args.filter(doesNotStartWithminus);
  result.fileName = nonOptions[0];

  var options = args.filter(startsWithMinus);
  
  if(options.length == 0) return result;

  result.reverseSort = options.some(is_r);
  if(result.reverseSort)
  result.defaultSort = false;

  result.fieldBysort = options.some(is_k);
  result.numberSort = options.some(is_n);
  result.delimiter = options.some(is_t);

  if(result.delimiter){
    var data = options.filter(getdelimiter);
    //console.log(data.toString());
    result.delimiterValue = data.toString().substring(3,4);
  }
  if(result.fieldBysort){
    var data = options.filter(getValue).toString();
    result.fieldvalue = data.substring(2,3);
  }
  //console.log(result);
  return result;
};

var reverseValues = function(text)
{
  return text.split('\n').reverse().join('\n');
}

st.calculateCounts = function(text,input){

  if(input.defaultSort && input.fieldvalue && input.numberSort){
  console.log(st.sortByFields(text,input.fieldvalue,false,true));
  return;
  }
  if(input.defaultSort && input.fieldvalue){
    console.log(st.sortByFields(text,input.fieldvalue,false,false));
  return;
  } 

  if(input.reverseSort && input.fieldvalue){
    console.log(reverseValues(st.sortByFields(text,input.fieldvalue,false,false)));
  }

  if(input.fileName){
    console.log(st.sortInIncreasingorder(text)); return;}
  if(input.reverseSort)
    console.log(st.reverseSort(text));
};