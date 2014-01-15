var mocks = {};
var mock_readfile_data = {
	filename: '',
	encoding: '',
	content: ''
};
var mock_writefile_data = {
	filename: '',
	content: ''
};

var mock_fs = {};
mock_fs.setup_readFileSync = function(filename,encoding,content){
	mock_readfile_data.filename = filename;
	mock_readfile_data.encoding = encoding;
	mock_readfile_data.content = content;
};
mock_fs.readFileSync = function(filename,encoding){
	if(filename === mock_readfile_data.filename && encoding === mock_readfile_data.encoding)
		return mock_readfile_data.content;
	throw new Error('expected readFileSync of '+mock_readfile_data.filename+' but asked for '+filename);
};

mock_fs.writeFileSync = function(filename,content){
	mock_writefile_data.filename = filename;
	mock_writefile_data.content = content;	
}; 

mock_fs.getFileName_writeFileSync = function(){
	return mock_writefile_data.filename;
};

mock_fs.getContent_writeFileSync = function(){
	return mock_writefile_data.content;
};

mocks.fs = mock_fs;
exports.mocks = mocks;