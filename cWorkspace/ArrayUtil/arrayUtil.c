#include <stdio.h>
#include <memory.h>
#include "arrayUtil.h"
ArrayUtil create(int typeSize, int elements){
	ArrayUtil arrayUtil;
	arrayUtil.base = calloc(elements,typeSize);
	arrayUtil.typeSize = typeSize;
	arrayUtil.length = elements;
	return arrayUtil;
};

ArrayUtil resize(ArrayUtil arrayUtil, int newLength) {
	ArrayUtil util;
	int differnce;
	int  oldSize = arrayUtil.typeSize*arrayUtil.length;
	int newSize = arrayUtil.typeSize*newLength;
	void* startingPtr;
	util.base = realloc(arrayUtil.base, newLength*arrayUtil.typeSize);
	if(newLength > arrayUtil.length){
		differnce = newSize-oldSize;
		startingPtr = util.base + oldSize;
		memset(startingPtr,0,differnce);
	}
	util.length = newLength;
	util.typeSize = arrayUtil.typeSize;
	return util;
};

int findIndex(ArrayUtil util, void* element){
	int i,temp;
	for (i = 0; i < util.length; ++i){
	     temp = memcmp(util.base+(i*util.typeSize),element,util.typeSize);
		 if(temp==0) return i;	
	}
	return -1;
}

void dispose(ArrayUtil util){
	free(util.base);
 }

/****/
int lessThan(int item,int limit){
	return limit > item;
}
int greaterThan(int item,int limit){
	return limit < item;
}
typedef int predicate(int item,int limit);

typedef struct{
	int start;
	predicate* test;
	int end;
	int step;
}LOOP;

void* find(LOOP loop,ArrayUtil util, MatchFunc* match, void* hint){
	int index = 0;
	for(index = loop.start ; loop.test(index,loop.end) ; index += loop.step){
		if(match(hint,util.base+(index * util.typeSize)))
			return util.base+(index * util.typeSize);
	}
	return NULL;
}

/****/

void* findFirst(ArrayUtil util, MatchFunc* match, void* hint){
	LOOP loop = {0,lessThan,util.length,1};
	return find(loop,util,match,hint);
}
void* findLast(ArrayUtil util, MatchFunc* match, void* hint){
	LOOP loop = {util.length-1,greaterThan,-1,-1};
	return find(loop,util,match,hint);
}

int count(ArrayUtil util, MatchFunc* match, void* hint){
    int i;
    void *item;
	int count = 0;
	for(i = 0; i < util.length ; i++){
		item=util.base+i * util.typeSize;
		if(match(hint,item))
			count++;
	}
	return count;
}

int filter(ArrayUtil util, MatchFunc* match, void* hint, void** destination, int maxItems ){
	int i;
    void *item;
    int count = 0;
	for(i = 0; i < util.length ; i++){
		if(count==maxItems) return count;
		item=util.base+i * util.typeSize;		
		if(match(hint,item)){
			destination[count]=item;
		count++;
	    }
    }
 return count;
};

void map(ArrayUtil source, ArrayUtil destination, ConvertFunc* convert, void* hint){
	int i;
	void* src;
	void* destn;
	for(i=0;i<source.length;++i){
		src = source.base+(i*source.typeSize);
		destn = destination.base+(i*destination.typeSize);
		convert(hint,src,destn);
	}
}

// void map(ArrayUtil source, ArrayUtil destination, ConvertFunc* convert, void* hint){
// 	int count;
// 	for (count = 0; count < source.length; ++count)
// 			convert(hint,source.base+(count*source.typeSize),destination.base+(count*source.typeSize));
// }

void forEach(ArrayUtil util, OperationFunc* operation, void* hint){
	int count;
	void *item;
	for (count = 0; count < util.length; ++count){
		item=util.base+(count*util.typeSize);
		operation(hint,item);
	}
}

void* reduce(ArrayUtil util, ReducerFunc* reducer, void* hint, void* intialValue){
	int i;
	void * item;
	for (i = 0; i < util.length; ++i){
		item = util.base+(i*util.typeSize);
		hint = reducer(hint,intialValue,item);
	}
	return hint;
}

// void reduce(ArrayUtil util, ReducerFunc* reducer, void* hint, void* result){
// 	int i;
// 	void* curr_address=util.base;
// 	for (i = 0; i < util.length; ++i){
// 		reducer( hint,  result,  curr_address);
// 		curr_address+=util.typeSize;
// 	}
// }