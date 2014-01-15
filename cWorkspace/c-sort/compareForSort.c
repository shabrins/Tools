#include <string.h>
#include "compareForSort.h"

int compareIntegers(const void *a, const void *b){
	return *(int*)a - *(int*)b;
};

int compareFloats (const void* a,const void* b){
	if((*(float*) a-*(float*) b)>0)
		return 1;
	if((*(float*) a-*(float*) b)<0)
		return -1;
	return 0;
};
int compareDoubles (const void* a,const void* b){
	if((*(double*) a-*(double*) b)>0)
		return 1;
	if((*(double*) a-*(double*) b)<0)
		return -1;
	return 0;
};
int compareString (const void* a,const void* b){
	return strcmp(a,b);
};