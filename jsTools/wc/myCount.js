var fs = require('fs');
var myCount = function()
 {
  var file_path = 0,argument = 0,index=0,count_word = 0,line_count = 0,count_char = 0,fileName = './b.txt';
  if(fs.existsSync(fileName)==true)
    {
    count_char=fs.readFileSync(fileName,'utf-8');
/*----------------------for number of char----------------------------*/
    lenght=count_char.length; 
    //console.log(lenght);
/*----------------------for number of words---------------------------*/
    while (index<count_char.length ) 
    {
	 if(count_char.charAt(index)==" " || count_char.charAt(index)=="\n")
      count_word++;
	  index++;
    }
      //console.log(count_word);
/*----------------------for number of lines---------------------------*/
  	 index=0;
    while (index<count_char.length )
    {
	 if(count_char.charAt(index)=="\n")
	
	   line_count++;
	   index++;
    }
     //console.log(line_count);
    }
/*----------------------for command line argv---------------------------*/
  file_path=process.argv[2];
 argument=process.argv[3];
 if(argument=="-w")
   {
 	console.log(count_word);
   }
 else if(argument=="-l")
   {
 	console.log(line_count);
   }
   else if(argument== "-c")
   {
   	 lenght=count_char.length; 
    console.log(lenght);
   }
   if(argument == "-version")
   {
   console.log("wc (GNU textutils) 2.0 Written by Paul Rubin and David MacKenzie.");
   console.log("Copyright (C) 1999 Free Software Foundation, Inc.");
   console.log("his is free software; see the source for copying conditions.  There is NO");
   console.log("warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.");
   }
   else if(argument == "--h")
   {
   	console.log("Usage: wc [OPTION]... [FILE]...");
    console.log("Print line, word, and byte counts for each FILE, and a total line if");
    console.log("more than one FILE is specified.  With no FILE, or when FILE is -,");
    console.log("read standard input.");
    console.log("-c, --chars            print the byte counts");
    console.log("-l, --lines            print the newline counts");
    console.log("-w, --words            print the word counts");
    console.log("--h                    display this help and exit");
    console.log("--version              output version information and exit")
    console.log("Report bugs to <bug-shabrin@gnu.org>.");
    }
 };
    myCount();

