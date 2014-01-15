var assert = require('assert');
var wc = require('./wc-lib.js').wc;
var test = {};
test.Hello_world_Good_Morning$Had_breakfast__has_39_chars = function(){
	assert.equal(39,wc.countChars("Hello world Good Morning\r\nHad breakfast"));
};
test.Hello_world_Good_Morning$Had_breakfast$No$Why_not__has_52_chars = function(){
	assert.equal(52,wc.countChars("Hello world Good Morning\r\nHad breakfast\r\nNo\r\nWhy not"));
};
test.Hello_world_Good_Morning$Had_breakfast$No$Why_not__has_3_lines = function(){
	assert.equal(3,wc.countLines("Hello world Good Morning\r\nHad breakfast\r\nNo\r\nWhy not"));
};
test.Hello__has_0_lines = function(){
	assert.equal(0,wc.countLines("Hello"));
};
test.Hello$World__has_1_line = function(){
	assert.equal(1,wc.countLines("Hello\r\nWorld"));
};
test.Hello_world_Good_Morning$Had_breakfast$No$Why_not__has_9_words = function(){
	assert.equal(9,wc.countWords("Hello world Good Morning\r\nHad breakfast\r\nNo\r\nWhy not"));
};
test.Hello__has_1_word = function(){
	assert.equal(1,wc.countWords("Hello"));
};
test.Hello_world__has_2_words = function(){
	assert.equal(2,wc.countWords("Hello world"));
};

test.Hello___world__has_2_words = function(){
	assert.equal(2,wc.countWords("Hello   world"));
};

test._Hello_world__has_2_words = function(){
	assert.equal(2,wc.countWords(" Hello world"));
};

test.Hello_world___has_2_words = function(){
	assert.equal(2,wc.countWords("Hello world "));
};

test.Hello_world_Good_Morning$Had_breakfast$No$Why_not__has__24_chars_in_longest_line = function(){
	assert.equal(24,wc.getLengthOfLongestLine("Hello world Good Morning\r\nHad breakfast\r\nNo\r\nWhy not"));
};

test.$__has__0_chars_in_longest_line = function(){
	assert.equal(0,wc.getLengthOfLongestLine("\r\n"));
};

test.__has__0_chars_in_longest_line = function(){
	assert.equal(0,wc.getLengthOfLongestLine(""));
};
test.wc_a_txt_should_recognize_a_txt_as_fileName = function(){
	assert.deepEqual({
		fileName:'a.txt',
		wordCount:true,
		lineCount:true,
		charCount:true,
		lengthOfLongestLine:false},wc.getUserInput(["a.txt"]));
};
test.wc_a_txt_minus_w_should_recognize_a_txt_as_fileName_and_wordcount = function(){
	assert.deepEqual({
		fileName:'a.txt',
		wordCount:true,
		lineCount:false,
		charCount:false,
		lengthOfLongestLine:false},wc.getUserInput(["a.txt","-w"]));
};
test.wc_minus_w_a_txt_should_recognize_a_txt_as_fileName_and_wordcount = function(){
	assert.deepEqual({
		fileName:'a.txt',
		wordCount:true,
		lineCount:false,
		charCount:false,
		lengthOfLongestLine:false},wc.getUserInput(["-w","a.txt"]));
};
test.wc_minus_l_a_txt_should_recognize_a_txt_as_fileName_and_linecount = function(){
	assert.deepEqual({
		fileName:'a.txt',
		wordCount:false,
		lineCount:true,
		charCount:false,
		lengthOfLongestLine:false},wc.getUserInput(["-l","a.txt"]));
};
test.wc_minus_l_minus_c_a_txt_should_recognize_a_txt_as_fileName_and_linecount_and_charCount = function(){
	assert.deepEqual({
		fileName:'a.txt',
		wordCount:false,
		lineCount:true,
		charCount:true,
		lengthOfLongestLine:false},wc.getUserInput(["-l","-c","a.txt"]));
};
test.wc_words_should_be_counted_if_user_input_has_w = function(){
	var input = {fileName:'a.txt',
		wordCount:true,
		lineCount:false,
		charCount:false,
		lengthOfLongestLine:false};
	assert.deepEqual({words:0},wc.calculateCounts('',input));
};
test.wc_words_and_lines_should_be_counted_if_user_input_has_w_and_l = function(){
	var input = {fileName:'a.txt',
		wordCount:true,
		lineCount:true,
		charCount:false,
		lengthOfLongestLine:false};
	assert.deepEqual({words:0,lines:0},wc.calculateCounts('',input));
};
exports.test = test;