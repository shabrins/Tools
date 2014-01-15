#include <stdlib.h>
typedef struct{
	void *base;
	size_t typeSize;
	size_t length;
}ArrayUtil;

typedef char String[256];

typedef int MatchFunc(void* hint, void* item);
typedef void ConvertFunc(void* hint, void* sourceItem, void* destinationItem);
typedef void OperationFunc(void* hint, void* item);
typedef void* ReducerFunc(void* hint,void* previousItem, void* item);



ArrayUtil create(int elementSize, int elements);
ArrayUtil resize(ArrayUtil arrayUtil, int elements);
int findIndex(ArrayUtil util, void* element);
void dispose(ArrayUtil util);
void* findFirst(ArrayUtil util, MatchFunc* match, void* hint);
void* findLast(ArrayUtil util, MatchFunc* match, void* hint);
int count(ArrayUtil util, MatchFunc* match, void* hint);
int filter(ArrayUtil util, MatchFunc* match, void* hint, void** destination, int maxItems );
void map(ArrayUtil source, ArrayUtil destination, ConvertFunc* convert, void* hint);
void forEach(ArrayUtil util, OperationFunc* operation, void* hint);
void* reduce(ArrayUtil util, ReducerFunc* reducer, void* hint, void* intialValue);

