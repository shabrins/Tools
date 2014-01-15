#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "compareForSort.h"
#include "sortelements.h"

void retriveIntegerItem (const void * address,String text){
	sprintf(text,"%d",*((int*)address));
}
void retriveFloatItem (const void * address,String text){
	sprintf(text,"%f",*((float*)address));
}
void retriveDoubleItem (const void * address,String text){
	sprintf(text,"%lf",*((double*)address));
}
void retriveStringItem (const void * address,String text){
	sprintf(text,"%s",address);
}


void sortItems(TypeConverter typeConverter){
	int index;
	void* items;
	char text[30];
	const void * address;
	items = calloc(typeConverter.limit,typeConverter.elementSize);
	printf("\nEnter items: \n");
	for(index=0;index<typeConverter.limit;++index){
		scanf(typeConverter.format, items + (typeConverter.elementSize*index));
	}
		printf("-----------\n");
	qsort(items,typeConverter.limit,typeConverter.elementSize,typeConverter.compare);
	printf("\nAfter sorting the list is: \n");
	for( index = 0 ; index < typeConverter.limit; ++index){
		address = items + (typeConverter.elementSize*index);
		typeConverter.retriveItem(address,text);
		printf("%s\n", text);
	}
	free(items);
}


int main(int argc, char const *argv[]){
	char *type = (char*)argv[1];
	int limit = atoi(argv[2]);
	TypeConverter integerType = {"%d",limit,4,compareIntegers,retriveIntegerItem};
	TypeConverter floatType = {"%f",limit,4,compareFloats,retriveFloatItem};
	TypeConverter doubleType = {"%lf",limit,8,compareDoubles,retriveDoubleItem};
	TypeConverter stringType = {"%s",limit,30,compareString,retriveStringItem,1};
	if(strcmp(type, "int")==0)
		sortItems(integerType);
	if(strcmp(type, "float")==0)
		sortItems(floatType);
	if(strcmp(type, "double")==0)
		sortItems(doubleType);
	if(strcmp(type, "string")==0)
		sortItems(stringType);
	return 0;
}

