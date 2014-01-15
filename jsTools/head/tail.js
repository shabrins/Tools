var fs=require('fs');
var helpfile="help.txt";
var tail=function()
{

  var input=to_read_input();
    if(!fs.existsSync(input.fileName))
  {
      console.log("File name not found!!");
    return;
  }
  var file_input=fs.readFileSync(input.fileName,'UTF-8');
    if(input.option.charAt(1)=='q' )
  {
     forLast10_line(file_input);
    return;
  }
  if(input.option.charAt(1)=='help' || input.option.charAt(1)=='h'){
    help();
   // return;
  }
  if(input.option.charAt(1)=='v'){
    console.log("==>",input.fileName,"<==")
    forLast10_line(file_input);
  }
  if(input.option.charAt(1)=='n'){
    for_n_Lines(input.option,input.fileName,file_input);
  }
  if(input.option.charAt(1)=='c'){
    for_char(input.option,input.fileName,file_input);
  }
  
      return;
  }
  

var help=function(){
  var help_data=fs.readFileSync(helpfile,'UTF-8');
  console.log(help_data);
};
var forLast10_line=function(file_input){
  var split_file = file_input.split("\n");
      for (var i = split_file.length-11; i < split_file.length; i++)
      {
        console.log(split_file[i]);
      }
      return;
};
var for_char=function(option,fileName,file_input){
  var given_str="";
  if(!option.charAt(2)){
      console.log("head:",fileName,": invalid number of bytes");
      return;
  }
  else{
      var value=option.substring(2,4);
        for(var i=0;i<value;i++)
          given_str=given_str+file_input[i];
          console.log(given_str);
        return;
      }
};
var for_n_Lines=function(option,fileName,file_input){
  if(!option.charAt(2)){
      console.log("head:",fileName,": invalid number of lines");
      return;
  }
    else{
      var value=option.substring(2,4);
      var split_file = file_input.split("\n");
      var split_by = "";
      for (var i = 2; i < option.length; i++) {
      split_by += option.charAt(i);
      };
     for (var i = split_file.length-split_by-1; i < split_file.length; i++)
        {
          console.log(split_file[i]);
        }
        return;
      }
}

var to_read_input=function(){
  var option=process.argv[2];
  var fileName;
  if(option.substring(0,1)=='-')
    fileName=process.argv[3];
  else{
    fileName=process.argv[2];
    option=process.argv[3];
  }
  var user_input={};
  user_input.option=option;
  user_input.fileName=fileName;
  return user_input;
};
tail();

exports.forLast10_line=forLast10_line;