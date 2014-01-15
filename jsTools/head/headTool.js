var fs=require('fs');
var helpfile="help.txt";
var head_main=function(){
  var input=to_read_input();
    if(input.fileName==null || !fs.existsSync(input.fileName)){
      console.log("File name not found!!");
        return;
    }
  var file_input=fs.readFileSync(input.fileName,'UTF-8');
    if(input.option==null || input.option.charAt(1)=='q' ){
       for_10_lines(file_input);
       return;
    }
    if(input.option.charAt(1)=='help' || input.option.charAt(1)=='h'){
       help();
       return;
    }
    if(input.option.charAt(1)=='v'){
       console.log("==>",input.fileName,"<==")
       for_10_lines(file_input);
    }
    if(input.option.charAt(1)=='n'){
      for_n_Lines(input.option,input.fileName,file_input);
    }
    if(input.option.charAt(1)=='c'){
    fot_byte(input.option,input.fileName,file_input);
    }
     return;
  }
  

  var help=function(){
    var help_data=fs.readFileSync(helpfile,'UTF-8');
    console.log(help_data);
  };


   var for_10_lines=function(file_input){
     var split_file = file_input.split("\n");
      for (var i = 0; i < 10; i++){
        console.log(split_file[i]);
      }
        return;
    };


  var fot_byte=function(option,fileName,file_input){
      var given_str="";
        if(!option.charAt(2)){
           console.log("head:",fileName,": invalid number of bytes");
            return;
        }
      var value=option.substring(2,4);
        for(var i=0;i<value;i++)
          given_str=given_str+file_input[i];
          console.log(given_str);
           return;
      
   };

  var for_n_Lines=function(option,fileName,file_input){
      if(!option.charAt(2)){
        console.log("head:",fileName,": invalid number of lines");
         return;
      }
    var value=option.substring(2,4);
    var split_file = file_input.split("\n");
      for (var i = 0; i < value; i++){
          console.log(split_file[i]);
      }
          return;
      
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
head_main();

exports.for_10_lines=for_10_lines;