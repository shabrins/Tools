var getFields = function(record,fieldNumber,delimiters)
{
	if(!delimiters)
		delimiters=' ';
	return record.split(delimiters)[fieldNumber-1];
};

exports.getFields=getFields;