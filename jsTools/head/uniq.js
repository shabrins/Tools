var fs=require('fs');

var uniqfunction=function(filename) 
{ 
 var option=process.argv[3];
  var fileName=process.argv[2];
  //var content=0; 

  content=fs.readFileSync(filename,'utf-8');
 
   var splitcontent=content.split('\n');
    
    var length=splitcontent.length; 
    console.log(length);

for(i=0;i<length;i++) 

  { 
    if((splitcontent[i])!=(splitcontent[i+1]))
     console.log(splitcontent[i]); }
}

var readuseroption=function()
{
var fileinfo={};


if(process.argv.length==3)
 {

  fileinfo.filename=process.argv[2];
  if(fs.existsSync(fileinfo.filename))
  {
  console.log(uniqfunction(fileinfo.filename));
  }
  else
  {
    console.log("No such file or directory");

  }
 }
}
readuseroption();