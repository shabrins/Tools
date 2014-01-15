var bc = {};
bc.fs = require('fs');

bc.writeData = function(data){ 
 return bc.fs.writeFileSync('catalog.txt',JSON.stringify(data),'utf-8');
}

bc.readData = function(){
  var text = bc.fs.readFileSync('catalog.txt','utf-8');
  var data = JSON.parse(text);
  return data;
};

bc.Change_String_into_Object=function(data){
  console.log(data);
}

bc.Get_Field=function(fieldName){
  if('-isbn'.indexOf(fieldName)!=-1) return 0;
  if('-price'.indexOf(fieldName)!=-1) return 1;
  if('-author'.indexOf(fieldName)!=-1) return 2;
  if('-title'.indexOf(fieldName)!=-1) return 3;
  if('-publication'.indexOf(fieldName)!=-1) return 4;
}

bc.Get_Record_key_value=function(input){
  var book_info=input.split(';');
  var key_value=['','','','',''];
  book_info.forEach(function(x){
    var field=bc.Get_Field(x.substr(0,x.indexOf(':')).toLowerCase())
      key_value[field]=x.substr(-(x.length-(x.indexOf(':')+1)))
  });
  return key_value;
}

bc.Convert_Array_to_object=function(key_value){
  var object={};

  var undefined_into_string=function(value){
    if(!value) return '';
    return value;
  }
  object.isbn=undefined_into_string(key_value[0]);
  object.price=undefined_into_string(key_value[1]);
  object.author=undefined_into_string(key_value[2]);
  object.title=undefined_into_string(key_value[3]);
  object.publication=undefined_into_string(key_value[4]);
  return object;
}

bc.toMakeObject = function(text){ 
  return JSON.parse("{\""+text.replace(/;/g,'\",\"').replace(/:/g,'\":\"')+"\"}");
};

bc.book_exsists = function(object){
  var keys = Object.keys(object);
  keys.some(function(element){
    console.log(element,typeof(element))
    element = element.split(',');
    console.log(element,"split")
  element == keys;
  return false
  })
};

bc.add_book_to_inventory=function(filedata,data){
  var key_value=bc.Get_Record_key_value(data);
  var record_Obj=bc.Convert_Array_to_object(key_value);
  var filedataObject = JSON.parse(filedata);
  var check_isbn=bc.book_exsists(filedataObject,record_Obj);
  if(check_isbn) return false;
  filedataObject[record_Obj.isbn]=record_Obj
   bc.writeData(filedataObject);
};

bc.remove_book = function(data,del_isbn){
  if(!data[del_isbn])
    return false;
   delete data[del_isbn];
   bc.writeData(data);
};

bc.book_list = function(text){
  text = bc.fs.readFileSync('inventory.txt','utf-8');
  if(text == '{}') return 'sorry !! book is not present.';
  return 'ISBN\tPrice\tAuthor\tTitle\tPublication'+'\n'+text.replace(/,/g,';');
};

bc.list_Books = function(filedata){
  var field = ["ISBN   Price  Author  Title  Publication\r\n"];
  if(filedata == '{}') return false;
  keysInfiledata = Object.keys(JSON.parse(filedata));
  var data = JSON.parse(filedata);
  var result = [];
  var index = 0;
  keysInfiledata.forEach(function(fields){
    result[index] = data[fields].isbn+' '+data[fields].price+' '+data[fields].author+
      ' '+data[fields].title+' '+data[fields].publication;
    index++;
  });
  return field+result.join('\r\n');
};

bc.search_by_name = function(filedata,search,field,fs){
  var filedata = bc.fs.readFileSync('catalog.txt','utf-8');
  var objKeys = Object.keys(filedata);
  var innerKeys = ['isbn','price','author' ,'title','publication'];
  if(field == null)
  {
    var filteredKeys = objKeys.filter(function(key){
      return innerKeys.some(function(field){
        var details = !filedata[key][field]  ? "" : filedata[key][field];
        details = details.toString().toLowerCase();
        return details.indexOf(search.toLowerCase()) > -1;
      })
    })
  }
    
  var result = {}; 
  for (var counter = 0; counter < filteredKeys.length; counter++)
    result[filteredKeys[counter]] = filedata[filteredKeys[counter]];
  var result = bc.list_Books(JSON.stringify(result));
  return result;    
};

bc.searchByKey = function(filedata,search,field,fs){
  var result = {};
  var dataObj = JSON.parse(filedata);
  var keys=Object.keys(dataObj);
  keys.forEach(function(element){
   var bookInInventory = dataObj[element][field];
     if(bookInInventory && bookInInventory.indexOf(search)!=-1) 
      result[element]=dataObj[element];
  });
  return result;
};

bc.data_to_fields = function(filedata,info){
var object=JSON.parse(filedata);
var objKeys=Object.keys(object);
var index = 0;
objKeys.forEach(function(element){
  if(info[index]!='')
    object[element] = info[index];
  index++
});
return object;
};

bc.updateBookToInventory = function(input,filedata){
  //console.log(input)
  var info = bc.Get_Record_key_value(input);
  //console.log(filedata,"what am i",typeof(filedata))
  var dataObj = JSON.parse(filedata);
  var dataKeys = Object.keys(dataObj);
  //console.log(dataKeys,"dataKeys[info]")

  var changeObj=bc.data_to_fields(filedata,info);
  dataKeys[info[0]] = changeObj;
  bc.writeData(JSON.stringify(dataObj));
  return {msg:"updated " +info[0]+ " in book inventory"};
  };

bc.findPositionOfIsbn = function(filedata,input){
var keys = Object.keys(filedata);
return keys.indexOf(input);
  
}

bc.remove_dublication_in_tags=function(tags,bookinfo){
    var allTags=tags.concat(bookinfo)
    var array = allTags.filter(function(element, pos) {
        return allTags.indexOf(element) == pos;})
    return array.filter(function(value){
      return value!='';
    });
}

bc.add_tags=function(isbn,tags){
  var filedata = bc.fs.readFileSync('catalog.txt','utf-8');
  var dataObj = JSON.parse(filedata)
  var objKeys = Object.keys(dataObj);
  var posOfIsbn=bc.findPositionOfIsbn(dataObj,isbn);
    if(posOfIsbn<0)return {msg:'Book with ISBN '+isbn+' is not present'};
  var bookinfo=dataObj[isbn];
  var newTags=bc.remove_dublication_in_tags(tags,bookinfo.tags);
  bookinfo.tags=newTags;
  bc.writeData(JSON.stringify(dataObj));
    return {msg:'Tags '+tags+' have been added to book number '+isbn};
};

bc.remove_tags = function(isbn,booktags){
  var filedata = bc.fs.readFileSync('catalog.txt','utf-8');
  var dataObj = JSON.parse(filedata)
  var objKeys = Object.keys(dataObj);
  var posOfIsbn=bc.findPositionOfIsbn(dataObj,isbn);
    if(posOfIsbn<0)return {msg:'Book with ISBN '+isbn+' is not present'};
  var bookinfo=dataObj[isbn];
  var bookisbn = bookinfo.tags;
  var bookisbn = bookisbn.split(" ");
  var tags = booktags.forEach(function(element){
  var pos = bookisbn.indexOf(element);
  if(pos>=0)
    bookisbn.splice(pos,1);})
  bc.writeData(JSON.stringify(dataObj));
  return {msg:"The Tag  " +booktags+ "  has been removed from number  " +isbn}
};

bc.calculateResult=function(data,input){
  if(input.add)
    return bc.add_book_to_inventory(data,input.add);
  if(input.remove.field && input.remove.bookdata)
    return bc.remove_book(data,input.remove);
  if(input.search)
    return bc.search_by_name(data,input.search);
  if(input.update)
    return bc.updateBookToInventory(data,input.update);
  return bc.list_Books(data);
};

var is_isbn = function(text){
 return  text.toLowerCase() == '-isbn';
};

var is_list = function(text){
 return text.toLowerCase()  == 'list';
};

var is_remove = function(text){
 return text.toLowerCase()  == 'remove';
};

var is_add = function(text){
 return text.toLowerCase()  == 'add';
};

var is_search = function(text){
 return text.toLowerCase()  == 'search';
};

var is_update = function(text){
 return text.toLowerCase()  == 'update';
};

var is_tags = function(text){
 return text.toLowerCase()  == 'tags';
};

var is_help=function(text){
  return text.toLowerCase() =='help';
}

bc.getUserInput = function(args){
  var result = {
    add:false,
    list:false,
    help:false,
    search:false,
    update:false,
    tag:false,
    remove:{
      field:false,
      bookdata:false
    }
  };

  if(args.length==0) return 'OPTION IS NOT PROVIDED';
  if(args[0].charAt(0) =='-' && args[0]!='help') return 'INPUT IS WRONG';
  if(args[0] =='list') 
    result.list=true;

  if(args.some(is_remove)){
    if(args[1]!="-isbn") return "PROVIDE ISBN NUMBER";
    result.remove.field = args[1];
    result.remove.bookdata = args[2];
    result.list = false;
  }

  if(args.some(is_add)){
    result.add = args[1];
    result.list = false;
  }
 
   if(args.some(is_search)){
    result.search = args[1];
    result.list = false;
  } 
  if(args.some(is_update)){
    result.update = args[1];
    result.list = false;
  } 
  if(args.some(is_tags)){
    result.tag = args[1];
    result.list = false;
  } 

  result.help=args.some(is_help);
  return result;
};


exports.bc = bc; 