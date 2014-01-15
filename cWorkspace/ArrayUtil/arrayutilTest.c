#include "testUtils.h"
#include "arrayutil.h"
#include <stdio.h>
#include <string.h>

//create setup, tearDown, fixtureSetup, fixtureTearDown methods if needed

typedef struct {
     char item_name[256];
     int price;
} Records;


ArrayUtil intUtil;
ArrayUtil floatUtil;
ArrayUtil doubleUtil;
ArrayUtil stringUtil;
void setup(){
	int index;
	intUtil=create(sizeof(int),5);
	for(index=0;index<5;++index){
		*(int*)(intUtil.base+(index*4))=(index+1);
	}
	doubleUtil = create(sizeof(double), 5);
	stringUtil = create(sizeof(String),5);
	floatUtil = create(sizeof(float),5);
}

void tearDown(){
	dispose(intUtil);
	printf("--------------------------------------------------------\n");
}

int areEqual(ArrayUtil a,ArrayUtil b){
	int result = a.typeSize == b.typeSize && a.length == b.length;
	if(!result) return result;
	return 0 == memcmp(a.base,b.base,a.length*a.typeSize);
}

int areEqualStruct(Records a,Records b){
	if(a.price!=b.price) return 0;
	return 0 == strcmp(a.item_name,b.item_name);
}

void test_create_arrayUtil_with_null_value_1(){
	int value[5] = {0,0,0,0,0};
	ArrayUtil expected = {value,sizeof(int),5};
	ArrayUtil util = create(4, 5);
	ASSERT(areEqual(expected,util));
}

void test_create_arrayUtil_with_1_to_5_value_2(){
	int value[5] = {1,2,3,4,5};
	ArrayUtil expected = {value,sizeof(int),5};
	ASSERT(areEqual(expected,intUtil));
}

void test_create_arrayUtil_with_five_double_null_values_3(){
	double value[5] = {0.0,0.0,0.0,0.0,0.0};
	ArrayUtil expected = {value,sizeof(double),5};
	ASSERT(areEqual(expected,doubleUtil));
}
void test_create_arrayUtil_with_five_float_null_values_4(){
	float value[5] = {0.0,0.0,0.0,0.0,0.0};
	ArrayUtil expected = {value,sizeof(float),5};
	ASSERT(areEqual(expected,floatUtil));
}

void test_create_arrayUtil_with_string_null_values_5(){
	String value[5] = {"","","","",""};
	ArrayUtil expected = {value,sizeof(String),5};
	ASSERT(areEqual(expected,stringUtil));
}

void test_resize_array_of_integer_reduce_length_6(){
	int value[3] = {1,2,3};
	ArrayUtil expected = {value,sizeof(int),3};
	intUtil = resize(intUtil,3);	
	ASSERT(areEqual(expected,intUtil));
}
void test_resize_array_of_integer_increase_length_7(){
	int value[7] = {1,2,3,4,5,0,0};
	ArrayUtil expected = {value,sizeof(int),7};
	intUtil = resize(intUtil,7);
	ASSERT(areEqual(expected,intUtil));
}

void test_resize_array_of_double_reduce_length_8(){
	double value[3] = {0.0,0.0,0.0};
	ArrayUtil expected = {value,sizeof(double),3};
	doubleUtil = resize(doubleUtil,3);
	ASSERT(areEqual(expected,doubleUtil));
}

void test_resize_array_of_float_reduce_length_9(){
	float value[3] = {0.0,0.0,0.0};
	ArrayUtil expected = {value,sizeof(float),3};
	floatUtil = resize(floatUtil,3);
	ASSERT(areEqual(expected,floatUtil));
}
void test_resize_array_of_double_increase_length_10(){
	double value[7] = {0.0,0.0,0.0,0.0,0.0,0.0,0.0};
	ArrayUtil expected = {value,sizeof(double),7};
	doubleUtil = resize(doubleUtil,7);
	ASSERT(areEqual(expected,doubleUtil));
}

void test_resize_array_of_float_increase_length_11(){
	float value[7] = {0.0,0.0,0.0,0.0,0.0,0.0,0.0};
	ArrayUtil expected = {value,sizeof(float),7};
	floatUtil = resize(floatUtil,7);
	ASSERT(areEqual(expected,floatUtil));
}

void test_resize_array_of_string_reduce_length_12(){
	String value[3] = {"","",""};
	ArrayUtil expected = {value,sizeof(String),3};
	stringUtil = resize(stringUtil,3);
	ASSERT(areEqual(expected,stringUtil));
}
void test_resize_array_of_String_increase_length_13(){
	String value[7] = {"","","","","","",""};
	ArrayUtil expected = {value,sizeof(String),7};
	stringUtil = resize(stringUtil,7);
	ASSERT(areEqual(expected,stringUtil));
}

void test_findIndex_to_locate_if_item_missing_14(){
	int element=8;
	void *ptr=&element;
	ASSERT(findIndex(intUtil,ptr)==-1);
}

void test_findIndex_for_float_to_locate_if_item_missing_15(){
	int element=8;
	void *ptr=&element;
	ASSERT(findIndex(floatUtil,ptr)==-1);
}

void test_findIndex_to_locate_if_item_present_16(){
	int element=4;
	void *ptr=&element;
	ASSERT(findIndex(intUtil,ptr)==3);
}

void test_findIndex_for_double_to_locate_if_item_missing_17(){
	int element=8;
	void *ptr=&element;
	ASSERT(findIndex(doubleUtil,ptr)==-1);
}

void test_findIndex_for_double_to_locate_if_item_present_18(){
	double element=0.0;
	void *ptr=&element;
	ASSERT(0 == findIndex(doubleUtil,ptr));
}

void test_findIndex_for_String_to_locate_if_item_missing_19(){
	char* element="xyz";
	void *ptr=&element;
	ASSERT(findIndex(stringUtil,ptr)==-1);
}

void test_findIndex_for_String_to_locate_if_item_present_20(){
	String element="apple";
	void *ptr=&element;
	String names[] = {"mango","orange","watermelon","apple","banana"};
		memmove(stringUtil.base,names,5*sizeof(String));
	ASSERT(findIndex(stringUtil,ptr)==3);
}

int isDivisible(void* hint,void* item){
	int a = *(int*)item;
	int b = *(int*)hint;
	if((a%b)==0)
		return 1;
	return 0;
}

int isNumber(void* hint,void* item){
	double num= *(double*)item;
	double element = *(double*) hint;
	if((num)==element)
		return 1;
	return 0;
}

int isEven(void* hint,void* item){
	int a = *(int*)item;
	if((a%2)==0)
		return 1;
	return 0;
}


int isOdd(void* hint,void* item){
	int a = *(int*)item;
	if((a%2)!=0)
		return 1;
	return 0;
}

int is_findchar(void* hint, void* item){
	int* hin = (int*)hint;
	int* ite = (int*)item;
	if(*ite % *hin ==0){
		return 1;
	}
	else
		return 0;

}
int stringLen(void* hint,void* item){
   String length;
   strcpy(length,*(String*)item);
   if(strlen(length)==10){
   	    return 1;
   	}
   return 0;
}

int length(void* hint,void* item){
	if (*(int*)hint==strlen(*(String*)item))
		return 1;
	return 0;
}

int isPresent(void* hint,void* item){
	Records rec = *(Records*)item;
	if(rec.price % (*(int*)hint) == 0) return 1;
	return 0;
}

void test_findFirst_element_for_isDivisible_21(){
	int element=2;
	void* hint = &element;
	void *ptr=findFirst(intUtil, isDivisible, hint);
	ASSERT(*(int*)ptr == 2);
}

void test_findFirst_element_for_isOdd_22(){
	int element=1;
	void* hint = &element;
	void* ptr = findFirst(intUtil, isOdd, hint);
	ASSERT(*(int*)ptr == 1);
}

void test_findFirst_element_for_isEven_23(){
	int element=4;
	void* hint = &element;
	void* ptr = findLast(intUtil, isEven, hint);
	ASSERT(*(int*)ptr == 4);
}

void test_findFirst_element_for_double_24(){
	double element=10.0;
	double value[5]={1.1,10.0,2.1,3.1,7.0};
	void* ptr;
	memmove(doubleUtil.base,value,5*sizeof(double));
	ptr = findLast(doubleUtil, isNumber, &element);
	ASSERT(10.0==*(double*)ptr);
}

void test_findFirst_element_for_String_25(){
	String element="ripeemango";
	void* result;
	String ptr[5] = {"ripeemango","orange","watermelon","apple","banana"};
	memmove(stringUtil.base, ptr, sizeof(String));
	result = findFirst(stringUtil,stringLen,&element);
	ASSERT(strcmp(element,*(String*)result)==0);
}

void test_find_first_element_structure_26(){
	void* result;
	int price = 150;
	Records expected = {"apple",150};
	Records Rec[3] = {{"orange",200},{"apple",150},{"banana",100}};
	ArrayUtil recordsUtil = create(sizeof(Records), 3);
	memmove(recordsUtil.base, Rec, sizeof(Records)*3);
	result = findFirst(recordsUtil,isPresent,&price);
	ASSERT(areEqualStruct(expected,*(Records*)result));
}

void test_findLast_element_for_isEven_27(){
	int element=4;
	void* hint = &element;
	void* ptr = findLast(intUtil, isEven, hint);
	ASSERT(*(int*)ptr == 4);
}

void test_findLast_element_for_isOdd_28(){
	int element=5;
	void* ptr = findLast(intUtil, isOdd, &element);
	ASSERT(*(int*)ptr == 5);
}

void test_findLast_element_for_double_29(){
	double element=10.0;
	double value[5]={1.1,2.1,3.1,10.0,7.0};
	void* ptr;
	memmove(doubleUtil.base,value,5*sizeof(double));
	ptr = findLast(doubleUtil, isNumber, &element);
	ASSERT(10.0==*(double*)ptr);
}

void test_find_last_element_for_string_30(){
	int hint=3;
	void* result;
	String names[] = {"apple","mango","red","strawberry","banana"};
	memmove(stringUtil.base,names,5*sizeof(String));
	result = findLast(stringUtil,length,&hint);
	ASSERT(0==strcmp("red",*(String*)result));
}

void test_to_count_the_number_of_elements_31(){
	int* value;
	int hint = 3;
	value = (int*)intUtil.base;
	value[0] = 9;value[1] = 18;value[2] = 6;value[3] = 15;value[4] = 8;
	ASSERT(4 == count(intUtil , isDivisible , &hint));	
}

void test_count_matching_double_elements_32(){
	double element=10.0;
	double value[5] = {10.0,9.8,10.0,10.0,17.0};
	int result;
	memmove(doubleUtil.base,value,5*sizeof(double));
	result=count(doubleUtil, isNumber, &element);
	ASSERT(3 == result);
}


void test_to_count_the_number_of_string_elements_33(){
	String* array1;
	char result;
	String hint = "s";
	stringUtil = create(sizeof(String),4);
	array1 = (String*)stringUtil.base;
	strcpy(array1[0],"a");
	strcpy(array1[1],"s");
	strcpy(array1[2],"a");
	strcpy(array1[3],"s");
	result = count(stringUtil,is_findchar,&hint);	
	ASSERT(result==2);
}

void test_to_count_structure_element_34(){
	int result;
	int item_num = 15;
	Records rec[3] = {{"red",66},{"pink",15},{"blue",33}};
	ArrayUtil utilRec = create(sizeof(Records), 3);
	memmove(utilRec.base, rec, sizeof(Records)*3);
	result = count(utilRec,isPresent,&item_num);
	ASSERT(1 == result);
}

void test_to_filter_element_from_integer_array_35(){
	int num = 2;
	int maxLimit = 5;
	int expected[2] = {2,4};
	void* destination[maxLimit];
	int**result;
	int count = filter(intUtil, isDivisible,&num,destination,maxLimit);
	result = (int**)destination;
	ASSERT(2== count && expected[0] == *(result[0]) && expected[1] == *(result[1]));
}

void test_to_filter_element_from_double_array_36(){
	int count;
	int maxLimit = 1;
	void* destination[maxLimit];
	double** result;
	double element=5.8;
	double expected[1] = {5.8};
	double values[5] = {10.0,5.8,4.5,10.0,7.0};
	memmove(doubleUtil.base,values,5*sizeof(double));
	count = filter(doubleUtil,isNumber,&element,destination,maxLimit);
	result = (double**)destination;
	ASSERT(expected[0] == *(result[0]) && 1==count);
}

void test_to_filter_element_from_string_array_37(){
	int count;
	int len=4;
	int maxLimit = 1;
	void* destination[maxLimit];
	String** result;
	String expected[1] = {"blue"};
	String names[] = {"red","green","orange","blue","black"};
	memmove(stringUtil.base,names,5*sizeof(String));
	count = filter(stringUtil,length,&len,destination,maxLimit);
	result = (String**)destination;
	ASSERT(0 == strcmp(expected[0],*(result[0])) && 1==count);
}

// void test_to_filter_element_from_structure_array_34(){
// 	int count;
// 	int len=4;
// 	int maxLimit = 1;
// 	void* destination[maxLimit];
// 	Records** result;
// 	Records expected[1] = {"apple",150};
// 	Records Rec[3] = {{"orange",200},{"apple",150},{"banana",100}};	
// 	ArrayUtil recordsUtil;
// 	memmove(recordsUtil.base, Rec, 5*sizeof(Records));
// 	count = filter(stringUtil,length,&len,destination,maxLimit);
// 	result = (Records**)destination;
// 	ASSERT(0 == areEqualStruct(expected[0],*(result[0])) && 1==count);
// }

void mulfunc(void* hint,void* src,void* destn){
	*(int*)destn = (*(int*)hint)*(*(int*)src);
}

void sumfunc(void* hint,void* src,void* destn){
	*(int*)destn = (*(int*)hint)+(*(int*)src);
	
}

void test_for_map_src_to_destn_using_mul_convert_func_38(){
	int num = 3;
	int expected[5] = {3,6,9,12,15};
	ArrayUtil destination = create(sizeof(int),5);
	map(intUtil, destination, mulfunc, &num);
	ASSERT(0==memcmp(expected, destination.base,sizeof(int)*5));
	dispose(destination);
}

void mulfuncForDouble(void* hint,void* src,void* destn){
	*(double*)destn = (*(int*)hint)*(*(double*)src);
}

void mulfuncForFloat(void* hint,void* src,void* destn){
	*(float*)destn = (*(int*)hint)*(*(float*)src);
}

void test_for_map_src_to_destn_using_mul_convert_func_double_43(){
	ArrayUtil destination=create(sizeof(double),5);
	int num = 2;
	double expected[5] = {2.0,2.4,2.6,2.8,3.0};
	double value[5] = {1.0,1.2,1.3,1.4,1.5};
	memmove(doubleUtil.base,value,5*sizeof(double));
	map(doubleUtil, destination, mulfuncForDouble, &num);
	ASSERT(0==memcmp(expected, destination.base,sizeof(double)*5));
	dispose(destination);
}

void test_for_map_src_to_destn_using_mul_convert_func_float_44(){
	ArrayUtil destination=create(sizeof(float),5);
	int num = 2;
	float expected[5] = {2.0,2.4,2.6,2.8,3.0};
	float value[5] = {1.0,1.2,1.3,1.4,1.5};
	memmove(floatUtil.base,value,5*sizeof(float));
	map(floatUtil, destination, mulfuncForFloat, &num);
	ASSERT(0==memcmp(expected, destination.base,sizeof(float)*5));
	dispose(destination);
}

void test_for_map_src_to_destn_using_sum_convert_func_39(){
	int num = 3;
	int expected[5] = {4,5,6,7,8};
	ArrayUtil destination = create(sizeof(int),5);
	map(intUtil, destination, sumfunc, &num);
	ASSERT(0==memcmp(expected, destination.base,sizeof(int)*5));
	dispose(destination);
}


void concatString(void* hint, void* src, void* destn){
	String result;
	strcpy(result,*(String*)src);
	strcat(result,*(String*)hint);
	strcpy(*(String*)destn,result);

}

void test_for_map_string_37(){
	ArrayUtil destination = create(sizeof(String),5);
	String hint = "ing";
	String expected[5] = {"singing","walking","painting","procastinating","juggling"};
	String names[] = {"sing","walk","paint","procastinat","juggl"};
	memmove(stringUtil.base,names,5*sizeof(String));
	map(stringUtil,destination,concatString,&hint);
	ASSERT(0==memcmp(expected, destination.base,sizeof(String)*5));
}


void* add(void*hint,void* initial,void* item){
	*(int*)initial = (*(int*)initial) + (*(int*)item);
	return initial;
}

void test_reduce_add_int_elements_40(){
	int expected = 15;
	void* result;
	int zero = 0;
	result = reduce(intUtil,add, &zero,&zero);
	ASSERT(expected==*(int*)result);
}

void* addDouble(void*hint,void* initial,void* item){
	*(double*)initial = (*(double*)initial) + (*(double*)item);
	return initial;
}

// void test_reduce_add_double_elements_47(){
// 	double expected[1] = {6};
// 	double value[5] = {1.0,1.1,1.2,1.3,1.4};
// 	memmove(doubleUtil.base,value,sizeof(double)*5);
// 	void* result;
// 	double zero = 0;
// 	result = reduce(doubleUtil,add, &zero,&zero);
// 	ASSERT(expected==*(double*)result);
// }



// void test_reduce_add_float_elements_38(){
// 	float expected = 15.0;
// 	void* result;
// 	float zero = 0.0;
// 	result = reduce(floatUtil,add, &zero);
// 	ASSERT(expected==*(float*)result);
// }

void multiply(void *hint,void *item){
	*(int*)item=(*(int*)hint)*(*(int*)item);
}
void test_for_foreach_using_mul_convert_func_41(){
	int num = 3;
	int expected[5] = {3,6,9,12,15};
	forEach(intUtil,multiply, &num);
	ASSERT(0==memcmp(expected,intUtil.base,sizeof(int)*5));
}

void multiplyDouble(void *hint,void *item){
	*(double*)item=(*(int*)hint)*(*(double*)item);
}

void test_for_foreach_using_mul_convert_func_for_double_45(){
	int num = 2;
	double expected[5] = {2.0,2.4,2.6,2.8,3.0};
	double value[5] = {1.0,1.2,1.3,1.4,1.5};
	memmove(doubleUtil.base,value,sizeof(double)*5);
	forEach(doubleUtil,multiplyDouble, &num);
	ASSERT(0==memcmp(expected,doubleUtil.base,sizeof(double)*5));
}

void multiplyfloat(void *hint,void *item){
	*(float*)item=(*(int*)hint)*(*(float*)item);
}

void test_for_foreach_using_mul_convert_func_for_float_46(){
	int num = 2;
	float expected[5] = {2.0,2.4,2.6,2.8,3.0};
	float value[5] = {1.0,1.2,1.3,1.4,1.5};
	memmove(floatUtil.base,value,sizeof(float)*5);
	forEach(floatUtil,multiplyfloat, &num);
	ASSERT(0==memcmp(expected,floatUtil.base,sizeof(float)*5));
}

// void test_for_foreach_float_using_mul_convert_func_43(){
// 	int num = 3.0;
// 	int expected[5] = {3.0,6.0,9.0,12.0,15.0};
// 	forEach(floatUtil,multiply, &num);
// 	ASSERT(0==memcmp(expected,floatUtil.base,sizeof(int)*5));
// }





void find_greater(void* hint, void* result, void* item){
	float* r = result;
	float* i = item;
	*r = (*r > *i)? *r : *i;
}

// void test_29_to_join_array_by_reduce_method(){
// 	String result;
// 	String *parts;
// 	char* pp[] = {"Pra","tee","k ","Ja","in"};
// 	src = create(sizeof(String), 5);
// 	copyMany(5, pp, src.base);
// 	reduce(src, join, NO_HINT,&result);
// 	ASSERT(0==strcmp("Prateek Jain",result));
// }



void join(void* hint, void* result, void* item){
	String* r = result;
	String* i = item;
	strcat(*r, *i);
}