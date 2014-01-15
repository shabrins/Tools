var wc = {};
wc.countChars = function(text){
	return text.length;
};
var countMatches = function(text,pattern){
	var matches = text.match(pattern);
	return matches? matches.length: 0;
};
wc.countLines = function(text){
	return countMatches(text,/\n/g);
};
wc.countWords = function(text){
	return countMatches(text,/\w+/g);
};

var findMaxLength = function(max,currentline){
	var length = wc.countChars(currentline);
	return length > max ? length:max;
};

wc.getLengthOfLongestLine = function(text){
	return text.split('\r\n').reduce(findMaxLength,0);
};
var doesNotStartWithminus = function(text){
	return text.charAt(0) != '-';
};
var startsWithMinus = function(text){
	return text.charAt(0) == '-';
};
var is_w = function(text){
	return text == '-w';
};
var is_l = function(text){
	return text == '-l';
};
var is_c = function(text){
	return text == '-c';
};
var is_L = function(text){
	return text == '-L';
};	
wc.getUserInput = function(args){
	var result = {
		lengthOfLongestLine:false,
		wordCount:true,
		lineCount:true,
		charCount:true
	};
	
	var nonOptions = args.filter(doesNotStartWithminus);
	result.fileName = nonOptions[0];
	
	var options = args.filter(startsWithMinus);

	if(options.length == 0) return result;

	result.wordCount = options.some(is_w);
	result.lineCount = options.some(is_l);
	result.charCount = options.some(is_c);
	result.lengthOfLongestLine = options.some(is_L);

	return result;
};

wc.calculateCounts = function(text,input){
	var result = {};
	if(input.wordCount)
		result.words = wc.countWords(text);
	if(input.charCount)
		result.chars = wc.countChars(text);
	if(input.lineCount)
		result.lines = wc.countLines(text);
	if(input.lengthOfLongestLine)
		result.lengthOfLongestLine = wc.getLengthOfLongestLine(text);
	return result;
};

exports.wc = wc;