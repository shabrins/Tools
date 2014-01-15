var assert = require('assert');
var bc = require('./bc_lib.js').bc;
var test = {};
var fs = require('fs');
var mock_fs = {};
mock_fs.data = "";

mock_fs.readFileSync = function(filename,encoding){
  return mock_fs.data;
}

mock_fs.writeFileSync = function(filename,content){
  mock_fs.data=content;
}; 
bc.fs = mock_fs;

test.sample_inventory_list_1 = function(){
mock_fs.data = { 
        "122":{
            "isbn":"122",
            "price":200,
            "author":"Paulo Coelho",
            "title":"The Alchemist",
            "publication":"Harper Collins Publishers"
          }
       }

var text = JSON.stringify(mock_fs.data);
var expected ="ISBN   Price  Author  Title  Publication\r\n122 200 Paulo Coelho The Alchemist Harper Collins Publishers"
 assert.deepEqual(expected,bc.list_Books(text));
};

test.sample2_inventory_list_2 = function(){
  mock_fs.data = { 
        "122":{
            "isbn":"122",
            "price":200,
            "author":"Paulo Coelho",
            "title":"The Alchemist",
            "publication":"Harper Collins Publishers"
          },
          "806":{
            "isbn":"806",
             "price":144,
             "author":"Agatha Christie",
             "title":"The Clocks",
             "publication":"Harper Collins UK"
          }
       };

var text = JSON.stringify(mock_fs.data);
var expected ="ISBN   Price  Author  Title  Publication\r\n122 200 Paulo Coelho The Alchemist Harper Collins Publishers\r\n806 144 Agatha Christie The Clocks Harper Collins UK"
assert.deepEqual(expected,bc.list_Books(text));
};

test.display_inventory_list_3 = function  () {
   mock_fs.data = '8172234988,200,Paulo Coelho,The Alchemist,Harper Collins Publishers';
   var expected = 'ISBN\tPrice\tAuthor\tTitle\tPublication'+'\n'+'8172234988;200;Paulo Coelho;The Alchemist;Harper Collins Publishers'
   var actual=bc.book_list()
   assert.equal(expected,actual);
    }

test.display_inventory_list_multiple_lines_4 = function  () {
   mock_fs.data = '8172234988,200,Paulo Coelho,The Alchemist,Harper Collins Publishers'+'\n'+'0007297806,144,Agatha Christie,The Clocks,Harper Collins UK';
   var expected = 'ISBN\tPrice\tAuthor\tTitle\tPublication'+'\n'+'8172234988;200;Paulo Coelho;The Alchemist;Harper Collins Publishers'+'\n'+'0007297806;144;Agatha Christie;The Clocks;Harper Collins UK';
   var actual=bc.book_list()
   assert.equal(expected,actual);
    }


test.to_add_book_to_inventory_5  = function  () {
 mock_fs.data={ 
        "122":{
            "isbn":"122",
            "price":200,
            "author":"Paulo Coelho",
            "title":"The Alchemist",
            "publication":"Harper Collins Publishers"
          }
        };

  var expected = { 
        "122":{
            "isbn":"122",
            "price":200,
            "author":"Paulo Coelho",
            "title":"The Alchemist",
            "publication":"Harper Collins Publishers"
          },
          "0007299806":{
            "isbn":"0007299806",
             "price":144,
             "author":"Agatha Christie",
             "title":"The Clocks",
             "publication":"a"
          }
}

var actual = bc.add_book_to_inventory(JSON.stringify(mock_fs.data),"isbn:0007299806;price:144;author:Agatha Christie;title:The Clocks;publication:a")
assert.deepEqual(expected,JSON.parse(mock_fs.data));
    }    



test.to_add_book_to_inventory_when_book_already_exsist_6  = function() {
 mock_fs.data={ 
               "122":{
               "isbn":"122",
               "price":200,
               "author":"Paulo Coelho",
               "title":"The Alchemist",
               "publication":"Harper Collins Publishers"
              },
              "0007299806":{
              "isbn":"0007299806",
              "price":144,
              "author":"Agatha Christie",
              "title":"The Clocks",
              "publication":"Harper Collins UK"
             }
            };
var actual = bc.add_book_to_inventory(JSON.stringify(mock_fs.data),"isbn:0007299806;price:144;author:Agatha Christie;title:The Clocks;publication:Harper Collins UK")
assert.equal(undefined,actual);
};   

test.to_add_book_to_inventory_when_it_is_empty_7 = function() {
mock_fs.data={};
var expected = { 
            "0007299806":{
            "isbn":"0007299806",
             "price":"144",
             "author":"Agatha Christie",
             "title":"The Clocks",
             "publication":"Harper Collins UK"
          }
};
var actual = bc.add_book_to_inventory(JSON.stringify(mock_fs.data),"isbn:0007299806;price:144;author:Agatha Christie;title:The Clocks;publication:Harper Collins UK")
assert.deepEqual(expected,JSON.parse(mock_fs.data));
};   

test.to_remove_book_from_inventory_8 = function() {
  var data = { 
        "122":{
            "isbn":"122",
            "price":200,
            "author":"Paulo Coelho",
            "title":"The Alchemist",
            "publication":"Harper Collins Publishers"
          },
          "0007299806":{
            "isbn":"0007299806",
             "price":144,
             "author":"Agatha Christie",
             "title":"The Clocks",
             "publication":"Harper Collins UK"
          }
}
var expected={ 
        "122":{
            "isbn":"122",
            "price":200,
            "author":"Paulo Coelho",
            "title":"The Alchemist",
            "publication":"Harper Collins Publishers"
          }
        }
 var actual=bc.remove_book(data,'0007299806');
  assert.deepEqual(expected,JSON.parse(mock_fs.data));
    }    

test.to_remove_last_book_from_inventory_9 = function() {
  var data = { 
        "122":{
            "isbn":"122",
            "price":200,
            "author":"Paulo Coelho",
            "title":"The Alchemist",
            "publication":"Harper Collins Publishers"
          }         
}
var expected={}
 var actual=bc.remove_book(data,'122');
  assert.deepEqual(expected,JSON.parse(mock_fs.data));
}; 

test.to_remove_book_from_inventory_when_it_is_empty_10 = function(){
  var data = {};
  var actual=bc.remove_book(data,'122');
  assert.deepEqual(false,actual);
};

test.to_check_there_are_no_two_books_by_the_same_ISBN_11  = function() {
 mock_fs.data={ 
               "122":{
               "isbn":"122",
               "price":200,
               "author":"Paulo Coelho",
               "title":"The Alchemist",
               "publication":"Harper Collins Publishers"
              },
              "806":{
              "isbn":"806",
              "price":144,
              "author":"Agatha Christie",
              "title":"The Clocks",
              "publication":"Harper Collins UK"
             }
            };
var input = "isbn:806;price:144;author:Agatha Christie;title:The Clocks;publication:Harper Collins UK";
var actual = bc.book_exsists(mock_fs.data);
assert.equal(false,actual);
};    


test.to_search_book_by_name_in_book_inventory_12 = function(){
    mock_fs.data =  {
            "122":{
            "isbn":122,
            "price":200,
            "author":"Paulo Coelho",
            "title":"The Alchemist",
            "publication":"Harper Collins Publishers"
          }      
      };
  var text = JSON.stringify(mock_fs.data);
  var search = 'Paulo';
  var field = null;
  assert.deepEqual("ISBN   Price  Author  Title  Publication\r\n122 200 Paulo Coelho The Alchemist Harper Collins Publishers",bc.search_by_name(text,search,field));
};

test.to_search_book_by_title_in_book_inventory_13 = function(){
    mock_fs.data =  {
            "122":{
            "isbn":122,
            "price":200,
            "author":"Paulo Coelho",
            "title":"The Alchemist",
            "publication":"Harper Collins Publishers"
          }      
      };
  var text = JSON.stringify(mock_fs.data);
  var search = 'The Alchemist';
  var field = null;
  assert.deepEqual("ISBN   Price  Author  Title  Publication\r\n122 200 Paulo Coelho The Alchemist Harper Collins Publishers",bc.search_by_name(text,search,field));
};

test.to_search_book_by_title_in_book_inventory_case_sensistive_14 = function(){
    mock_fs.data =  {
            "122":{
            "isbn":122,
            "price":200,
            "author":"Paulo Coelho",
            "title":"The Alchemist",
            "publication":"Harper Collins Publishers"
          }      
      };
  var text = JSON.stringify(mock_fs.data);
  var search = 'paulo coe';
  var field = null;
  assert.deepEqual("ISBN   Price  Author  Title  Publication\r\n122 200 Paulo Coelho The Alchemist Harper Collins Publishers",bc.search_by_name(text,search,field));
};

test.to_search_book_by_name_in_book_inventory_when_it_is_not_present_15 = function(){
    mock_fs.data =  {
            "122":{
            "isbn":122,
            "price":200,
            "author":"Paulo Coelho",
            "title":"The Alchemist",
            "publication":"Harper Collins Publishers"
          }      
      };
  var text = JSON.stringify(mock_fs.data);
  var search = 'shabrin';
  var field = null;
  assert.deepEqual(false,bc.search_by_name(text,search,field));
};

test.to_search_mul_book_by_name_in_book_inventory_16 = function(){
mock_fs.data = { 
        "122":{
            "isbn":"122",
            "price":200,
            "author":"Paulo Coelho",
            "title":"The Alchemist",
            "publication":"Harper Collins Publishers"
          },
          "806":{
            "isbn":"806",
             "price":144,
             "author":"Agatha Christie",
             "title":"The Clocks",
             "publication":"Harper Collins UK"
          }
       };

  var text = JSON.stringify(mock_fs.data);
  var search = 'Harper';
  var field = null;
  assert.deepEqual("ISBN   Price  Author  Title  Publication\r\n122 200 Paulo Coelho The Alchemist Harper Collins Publishers\r\n806 144 Agatha Christie The Clocks Harper Collins UK",bc.search_by_name(text,search,field));
};     

test.to_search_book_by_name_in_book_inventory_by_field_publication_17 = function(){
mock_fs.data = { 
        "122":{
            "isbn":"122",
            "price":200,
            "author":"Paulo Coelho",
            "title":"The Alchemist",
            "publication":"Harper Collins Publishers"
          },
          "806":{
            "isbn":"806",
             "price":144,
             "author":"Agatha Christie",
             "title":"The Clocks",
             "publication":"Harper Collins UK"
          }
       };

  var text = JSON.stringify(mock_fs.data);
  var search = 'Harper';
  var field = "publication";
  assert.deepEqual(mock_fs.data,bc.searchByKey(text,search,field));
};    

test.to_search_book_by_name_in_book_inventory_by_field_title_18 = function(){
mock_fs.data = { 
          "806":{
            "isbn":"806",
             "price":144,
             "author":"Agatha Christie",
             "title":"The Clocks",
             "publication":"Harper Collins UK"
          }
       };
  var text = JSON.stringify(mock_fs.data);
  var search = 'The Clocks';
  var field = "title";
  assert.deepEqual(mock_fs.data,bc.searchByKey(text,search,field));
};    

test.to_search_book_by_name_in_book_inventory_by_field_19 = function(){
mock_fs.data = { 
          "806":{
            "isbn":"806",
             "price":144,
             "author":"Agatha Christie",
             "title":"The Clocks",
             "publication":"Harper Collins UK"
          }
       };

  var text = JSON.stringify(mock_fs.data);
  var search = '806';
  var field = "isbn";
  
  assert.deepEqual(mock_fs.data,bc.searchByKey(text,search,field));
};    

test.to_search_book_by_name_in_book_inventory_by_field_author_20 = function(){
mock_fs.data = { 
        "122":{
            "isbn":"122",
            "price":200,
            "author":"Paulo Coelho",
            "title":"The Alchemist",
            "publication":"Harper Collins Publishers"
          }
       };

  var text = JSON.stringify(mock_fs.data);
  var search = 'Paulo';
  var field = "author";
  
  assert.deepEqual(mock_fs.data,bc.searchByKey(text,search,field));
};   

test.to_update_book_in_book_inventory_the_book_price_21 = function(){
var data ={ 
          "806":{
            "isbn":"806",
             "price":144,
             "author":"Agatha Christie",
             "title":"The Clocks",
             "publication":"Harper Collins UK",
          }
       };
mock_fs.data = JSON.stringify(data);
var input = "isbn:806;price:244;author:Agatha Christie;title:The Clocks;publication:Harper Collins UK";  
assert.deepEqual( {"msg":"updated 806 in book inventory"},bc.updateBookToInventory(input,mock_fs.data));
};   

test.to_check_data_to_fields_22 = function(){
mock_fs.data = { 
          "806":{
             "isbn":"806",
             "price":144,
             "author":"Agatha Christie",
             "title":"The Clocks",
             "publication":"Harper Collins UK"
          }
       }    

  var exp = {"806":"806"};
  var text = JSON.stringify(mock_fs.data);
  var info = ["806","144","Agatha Christie","The Clocks","Harper Collins UK"]
  assert.deepEqual(exp,bc.data_to_fields(text,info));
};   

test.to_Get_Record_key_value_23 = function(){
mock_fs.data = "isbn:806;price:244;author:Agatha Christie;title:The Clocks;publication:Harper Collins UK"; 
var exp = ["806","244","Agatha Christie","The Clocks","Harper Collins UK"]
assert.deepEqual(exp,bc.Get_Record_key_value(mock_fs.data));
};

test.to_add_tag_in_book_inventory_24 = function(){
var data ={ 
          "806":{
             "isbn":"806",
             "price":144,
             "author":"Agatha Christie",
             "title":"The Clocks",
             "publication":"Harper Collins UK"
          }
       };
mock_fs.data = JSON.stringify(data);
var expected = {"msg":"Tags mystery have been added to book number 806"};
assert.deepEqual(expected,bc.add_tags("806",["mystery"]));
};     

test.to_add_mul_tag_in_book_inventory_25 = function(){
var data ={ 
          "806":{
             "isbn":"806",
             "price":144,
             "author":"Agatha Christie",
             "title":"The Clocks",
             "publication":"Harper Collins UK"
          }
       };
mock_fs.data = JSON.stringify(data);
var expected = {"msg":"Tags mystery,novel have been added to book number 806"};
assert.deepEqual(expected,bc.add_tags("806",["mystery","novel"]));
};     

test.to_remove_tag_from_book_inventory_26 = function(){
var data ={ 
          "806":{
             "isbn":"806",
             "price":144,
             "author":"Agatha Christie",
             "title":"The Clocks",
             "publication":"Harper Collins UK",
             "tags":"mystery"
          }
       };
mock_fs.data = JSON.stringify(data);
var expected = {"msg":"The Tag  mystery  has been removed from number  806"};
assert.deepEqual(expected,bc.remove_tags("806",["mystery"]));
}; 

test.to_remove_tag_from_book_inventory_27 = function(){
var data ={ 
          "806":{
             "isbn":"806",
             "price":144,
             "author":"Agatha Christie",
             "title":"The Clocks",
             "publication":"Harper Collins UK",
             "tags":"mystery,novel"
          }
       };
mock_fs.data = JSON.stringify(data);
var expected = {"msg":"The Tag  mystery,novel  has been removed from number  806"};
assert.deepEqual(expected,bc.remove_tags("806",["mystery","novel"]));
}; 

exports.test = test;    