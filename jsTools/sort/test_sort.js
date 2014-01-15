var assert = require('assert');
var sort1 = require('./sort_lib.js').sort1;
var test = {};

test.sort_Kapil_Dev_Mohinder_Amarnath_after_sort_Amarnath_Dev_Kapil_Mohinder= function(){
	assert.deepEqual(['Amarnath','Dev','Kapil','Mohinder'],sort1.byAscendingOrder(['Kapil','Dev','Mohinder','Amarnath']));
}; 

test.sort_reverse_Kapil_Dev_Mohinder_Amarnath_after_sort_Mohinder_Kapil_Dev_Amarnath = function(){
	assert.deepEqual(['Mohinder','Kapil','Dev','Amarnath'],sort1.byDescendingOrder(['Kapil','Dev','Mohinder','Amarnath']));
}; 

test.sort_3_5_1_2_4_after_sort_1_2_3_4_5 = function(){
	assert.deepEqual([1,2,3,4,5],sort1.byNumber([3,5,1,2,4]));
};

test.sort_Kite_Dog_Monkey_Apple_after_sort_Apple_Dog_Kite_Monkey = function(){
	assert.equal("Apple\nDog\nKite\nMonkey",sort1.byLines("Kite\nDog\nMonkey\nApple"));
}; 

test.sort_Kite_Dog_Monkey_Apple_after_sort_Monkey_Kite_Dog_Apple = function(){
	assert.equal("Monkey\nKite\nDog\nApple",sort1.reverseByLines("Kite\nDog\nMonkey\nApple"));
}; 

test.for_sorted_by_reverse_order = function () {
	assert.equal("yy e 4\nee d 3\ncc a 9\nbb b 1",sort1.reverseByLines("cc a 9\nbb b 1\nee d 3\nyy e 4"));
};

test.for_sorted_by_reverse_order_no_option = function () {
	assert.equal("yy e 4\nee d 3\ncc a 9\nbb b 1",sort1.reverseByLines("cc a 9\nbb b 1\nee d 3\nyy e 4"));
};

test.Sort_By_Fields_cc_dd$yy_zz$aa_bb$ee_ff_after_sort_aa_bb$cc_dd$ee_ff$yy_zz = function(){
	assert.equal("aa bb\ncc dd\nee ff\nyy zz",sort1.byField_and_Num("cc dd\nyy zz\naa bb\nee ff",2,false));
};

test.By_Field_cc_dd_2$yy_zz_4$aa_bb_1$ee_ff_3_after_sort_aa_bb_1$cc_dd_2$ee_ff_3$yy_zz_4 = function(){
	assert.equal("aa bb 1\ncc dd 2\nee ff 3\nyy zz 4",sort1.byField_and_Num("cc dd 2\nyy zz 4\naa bb 1\nee ff 3",3,false));
};

test.By_Field_and_num_cc_dd_2$yy_zz_4$aa_bb_1$ee_ff_3_after_sort_aa_bb_1$cc_dd_2$ee_ff_3$yy_zz_4 = function(){
	assert.equal("aa bb 1\ncc dd 2\nee ff 3\nyy zz 4",sort1.byField_and_Num("cc dd 2\nyy zz 4\naa bb 1\nee ff 3",3,true));
};

test.By_Field_and_num_and_delimeter_cc_dd_2$yy_zz_4$aa_bb_1$ee_ff_3_after_sort_aa_bb_1$cc_dd_2$ee_ff_3$yy_zz_4 = function(){
	assert.equal("yy,zz,1\ncc,dd,2\nee,ff,3\naa,bb,4",sort1.byField_and_Num("cc,dd,2\naa,bb,4\nyy,zz,1\nee,ff,3",3,',',true));
};

test.By_field_and_delimeter_cc_dd$yy_zz$aa_bb$ee_ff_after_sort_aa_bb$cc_dd$ee_ff$yy_zz = function(){
	assert.equal("aa,bb\ncc,dd\nee,ff\nyy,zz",sort1.byField_and_Num("cc,dd\nyy,zz\naa,bb\nee,ff",2,',',false));
};


test.By_Fieldnum1_cc_dd_2$yy_zz_4$aa_bb_1$ee_ff_3_after_sort_aa_bb_1$cc_dd_2$ee_ff_3$yy_zz_4 = function(){
	assert.equal("bb aa 1\ncc dd 2\nee ff 3\nyy zz 4",sort1.byField_and_Num("cc dd 2\nyy zz 4\nbb aa 1\nee ff 3",1,false));
};

test.By_Fieldnum2_cc_dd_2$yy_zz_4$aa_bb_1$ee_ff_3_after_sort_aa_bb_1$cc_dd_2$ee_ff_3$yy_zz_4 = function(){
	assert.equal("bb a 1\ncc b 9\nee c 3\nyy d 4",sort1.byField_and_Num("cc b 9\nyy d 4\nbb a 1\nee c 3",2,false));
};
test.By_Fieldnum3_cc_dd_2$yy_zz_4$aa_bb_1$ee_ff_3_after_sort_aa_bb_1$cc_dd_2$ee_ff_3$yy_zz_4 = function(){
	assert.equal("bb aa 1\ncc dd 2\nee ff 3\nyy zz 4",sort1.byField_and_Num("cc dd 2\nyy zz 4\nbb aa 1\nee ff 3",3,false));
};
test.By_FieldDelimeter_cc_dd_2$yy_zz_4$aa_bb_1$ee_ff_3_after_sort_aa_bb_1$cc_dd_2$ee_ff_3$yy_zz_4 = function(){
	assert.equal("bb,aa 1\ncc,dd 2\nee,ff 3\nyy,zz 4",sort1.byField_and_Num("cc,dd 2\nyy,zz 4\nbb,aa 1\nee,ff 3",2,',',false));
};

test.By_FieldnumDelimeter_cc_dd_2$yy_zz_4$aa_bb_1$ee_ff_3_after_sort_aa_bb_1$cc_dd_2$ee_ff_3$yy_zz_4 = function(){
	assert.equal("bb,aa 1\ncc,dd 2\nee,ff 3\nyy,zz 4",sort1.byField_and_Num("cc,dd 2\nyy,zz 4\nbb,aa 1\nee,ff 3",3,',',false));
};

test.By_Fieldnum1_cc_dd_2$yy_zz_4$aa_bb_1$ee_ff_3_after_sort_aa_bb_1$cc_dd_2$ee_ff_3$yy_zz_4 = function(){
	assert.equal("bb aa 1\ncc dd 2\nee ff 3\nyy zz 4",sort1.byField_and_Num("cc dd 2\nyy zz 4\nbb aa 1\nee ff 3",1,false));
};

test.By_Fieldnum2_cc_dd_2$yy_zz_4$aa_bb_1$ee_ff_3_after_sort_aa_bb_1$cc_dd_2$ee_ff_3$yy_zz_4 = function(){
	assert.equal("bb a 1\ncc b 9\nee c 3\nyy d 4",sort1.byField_and_Num("cc b 9\nyy d 4\nbb a 1\nee c 3",2,false));
};
test.By_Fieldnum3_cc_dd_2$yy_zz_4$aa_bb_1$ee_ff_3_after_sort_aa_bb_1$cc_dd_2$ee_ff_3$yy_zz_4 = function(){
	assert.equal("bb aa 1\ncc dd 2\nee ff 3\nyy zz 4",sort1.byField_and_Num("cc dd 2\nyy zz 4\nbb aa 1\nee ff 3",3,false));
};
test.By_FieldDelimeter_cc_dd_2$yy_zz_4$aa_bb_1$ee_ff_3_after_sort_aa_bb_1$cc_dd_2$ee_ff_3$yy_zz_4 = function(){
	assert.equal("bb,aa 1\ncc,dd 2\nee,ff 3\nyy,zz 4",sort1.byField_and_Num("cc,dd 2\nyy,zz 4\nbb,aa 1\nee,ff 3",2,',',false));
};

test.By_FieldnumDelimeter_cc_dd_2$yy_zz_4$aa_bb_1$ee_ff_3_after_sort_aa_bb_1$cc_dd_2$ee_ff_3$yy_zz_4 = function(){
	assert.equal("bb,aa 1\ncc,dd 2\nee,ff 3\nyy,zz 4",sort1.byField_and_Num("cc,dd 2\nyy,zz 4\nbb,aa 1\nee,ff 3",3,',',false));
};

test.check_for_unsorted_text = function () {
	assert.equal("aabb",sort1.checkUnorderText("ccdd\nyyzz\naabb\neeff"));
};

test.check_for_unsorted_text_with_field = function () {
	assert.equal("aa bb",sort1.checkUnorderText("cc dd\nyy zz\naa bb\nee ff",2));
};

test.check_for_unsorted_text_with_field_and_delimeter = function () {
	assert.equal("a b",sort1.checkUnorderText("x f\ny g\na b",2,' '));
};

test.check_for_unsorted_text_with_field_that_is_not_present = function () {
	assert.equal("aabb 3",sort1.checkUnorderText("ccdd 1\nyyzz 2\naabb 3\neeff 4",9));
};

test.check_for_unsorted_reverse_text = function () {
	assert.deepEqual("ee d 3",sort1.checkUnorder_for_reverse_Text("bb b 1\nee d 3\nyy e 4\ncc a 9"));
};
test.check_for_unsorted_reverse_text_with_delimeter = function () {
	assert.deepEqual("ee,d,3",sort1.checkUnorder_for_reverse_Text("bb,b,1\nee,d,3\nyy,e,4\ncc,a,9",','));
};

test.check_for_unsorted_reverse_text_with_fields = function () {
	assert.deepEqual("d d",sort1.checkUnorder_for_reverse_Text("a a\nd d\nc c\ne e",2));
};

test.check_for_unsorted_reverse_text_with_fields_and_delimeter = function () {
	assert.deepEqual("d,d",sort1.checkUnorder_for_reverse_Text("a,a\nd,d\nc,c\ne,e",2,','));
};

test.sort_people_txt_should_recognize_people_txt_as_fileName_and_sort = function(){
	assert.deepEqual({
		fileName:'people.txt',
		sort_default:true,
        check:false,
        separator:false,
        separatorValue:null,
    	reverse:false,
    	numberSort:false},sort1.getUserInput(["people.txt"]));
};

test.sort_minus_r_people_txt_should_recognize_people_txt_as_fileName_and_reverse_sort = function(){
	assert.deepEqual({
		fileName:'people.txt',
		sort_default:true,
        check:false,
        separator:false,
        separatorValue:null,
        reverse:true,
    	numberSort:false},sort1.getUserInput(["people.txt","-r"]));
};

test.sort_minus_c_people_txt_should_recognize_people_txt_as_fileName_and_check_the_sort_disorder = function(){
  assert.deepEqual({
        fileName:'people.txt',
        sort_default:true,
        check:true,
        separator:false,
        separatorValue:null,
    	reverse:false,
    	numberSort:false},sort1.getUserInput(["-c","people.txt"]));
};

test.sort_minus_t_people_txt_should_recognize_people_txt_as_fileName_and_sort_with_delimeter = function(){
  assert.deepEqual({
    	fileName:'people.txt',
    	sort_default:true,
        check:false,
        separator:true,
        separatorValue:null,
    	reverse:false,
    	numberSort:false},sort1.getUserInput(["-t","people.txt"]));
};

test.getUserInput_ShouldProcessFieldsAndFileOptions = function(){
	var expectedUserInput={fileName:"file.txt",byFields:true,fieldNumber:2};
	var userInput=sort1.getUserInput_forFields(["node","main_sort.js", "file.txt", "-k2"]);
	assert.deepEqual(expectedUserInput,userInput);
};

test.getUserInput_ShouldProcessFieldsAndFileOptionsSpecifiedInDifferentOrder = function(){
	var expectedUserInput={fileName:"file.txt",byFields:true,fieldNumber:1};
	var userInput=sort1.getUserInput_forFields(["node","main_sort.js","-k1", "file.txt"]);
	assert.deepEqual(expectedUserInput,userInput);
};

exports.test = test;