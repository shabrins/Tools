#include <stdio.h>

int testCount=-1;
int passCount=0;
void setup();
void tearDown();

void fixtureSetup();
void fixtureTearDown();
void incrementTestCount();
void incrementPassCount();
int currentTestFailed=0;

void testStarted(char* name){
	incrementTestCount();
	currentTestFailed=0;
	printf("\t%s\n",name);
}

void testEnded(){
	if(!currentTestFailed)
		incrementPassCount();
}

void resetTestCount(){
	testCount=0;
	passCount=0;
	printf("********* Starting tests\n\n");
}

void summarizeTestCount(){
	printf("\n********* Ran %d tests passed %d failed %d\n",testCount,passCount,testCount-passCount);
}

void incrementTestCount(){
	testCount++;
}

void incrementPassCount(){
	passCount++;
}

void testFailed(const char* fileName, int lineNumber, char* expression){
	currentTestFailed = 1;
	printf("\t\t %s : failed at %s:%d\n",expression, fileName,lineNumber);
}

int main(){
	fixtureSetup();
	resetTestCount();

	testStarted("test_create_arrayUtil_with_null_value_1");
	setup();
		test_create_arrayUtil_with_null_value_1();
	tearDown();
	testEnded();
	testStarted("test_create_arrayUtil_with_1_to_5_value_2");
	setup();
		test_create_arrayUtil_with_1_to_5_value_2();
	tearDown();
	testEnded();
	testStarted("test_create_arrayUtil_with_five_double_null_values_3");
	setup();
		test_create_arrayUtil_with_five_double_null_values_3();
	tearDown();
	testEnded();
	testStarted("test_create_arrayUtil_with_five_float_null_values_4");
	setup();
		test_create_arrayUtil_with_five_float_null_values_4();
	tearDown();
	testEnded();
	testStarted("test_create_arrayUtil_with_string_null_values_5");
	setup();
		test_create_arrayUtil_with_string_null_values_5();
	tearDown();
	testEnded();
	testStarted("test_resize_array_of_integer_reduce_length_6");
	setup();
		test_resize_array_of_integer_reduce_length_6();
	tearDown();
	testEnded();
	testStarted("test_resize_array_of_integer_increase_length_7");
	setup();
		test_resize_array_of_integer_increase_length_7();
	tearDown();
	testEnded();
	testStarted("test_resize_array_of_double_reduce_length_8");
	setup();
		test_resize_array_of_double_reduce_length_8();
	tearDown();
	testEnded();
	testStarted("test_resize_array_of_float_reduce_length_9");
	setup();
		test_resize_array_of_float_reduce_length_9();
	tearDown();
	testEnded();
	testStarted("test_resize_array_of_double_increase_length_10");
	setup();
		test_resize_array_of_double_increase_length_10();
	tearDown();
	testEnded();
	testStarted("test_resize_array_of_float_increase_length_11");
	setup();
		test_resize_array_of_float_increase_length_11();
	tearDown();
	testEnded();
	testStarted("test_resize_array_of_string_reduce_length_12");
	setup();
		test_resize_array_of_string_reduce_length_12();
	tearDown();
	testEnded();
	testStarted("test_resize_array_of_String_increase_length_13");
	setup();
		test_resize_array_of_String_increase_length_13();
	tearDown();
	testEnded();
	testStarted("test_findIndex_to_locate_if_item_missing_14");
	setup();
		test_findIndex_to_locate_if_item_missing_14();
	tearDown();
	testEnded();
	testStarted("test_findIndex_for_float_to_locate_if_item_missing_15");
	setup();
		test_findIndex_for_float_to_locate_if_item_missing_15();
	tearDown();
	testEnded();
	testStarted("test_findIndex_to_locate_if_item_present_16");
	setup();
		test_findIndex_to_locate_if_item_present_16();
	tearDown();
	testEnded();
	testStarted("test_findIndex_for_double_to_locate_if_item_missing_17");
	setup();
		test_findIndex_for_double_to_locate_if_item_missing_17();
	tearDown();
	testEnded();
	testStarted("test_findIndex_for_double_to_locate_if_item_present_18");
	setup();
		test_findIndex_for_double_to_locate_if_item_present_18();
	tearDown();
	testEnded();
	testStarted("test_findIndex_for_String_to_locate_if_item_missing_19");
	setup();
		test_findIndex_for_String_to_locate_if_item_missing_19();
	tearDown();
	testEnded();
	testStarted("test_findIndex_for_String_to_locate_if_item_present_20");
	setup();
		test_findIndex_for_String_to_locate_if_item_present_20();
	tearDown();
	testEnded();
	testStarted("test_findFirst_element_for_isDivisible_21");
	setup();
		test_findFirst_element_for_isDivisible_21();
	tearDown();
	testEnded();
	testStarted("test_findFirst_element_for_isOdd_22");
	setup();
		test_findFirst_element_for_isOdd_22();
	tearDown();
	testEnded();
	testStarted("test_findFirst_element_for_isEven_23");
	setup();
		test_findFirst_element_for_isEven_23();
	tearDown();
	testEnded();
	testStarted("test_findFirst_element_for_double_24");
	setup();
		test_findFirst_element_for_double_24();
	tearDown();
	testEnded();
	testStarted("test_findFirst_element_for_String_25");
	setup();
		test_findFirst_element_for_String_25();
	tearDown();
	testEnded();
	testStarted("test_find_first_element_structure_26");
	setup();
		test_find_first_element_structure_26();
	tearDown();
	testEnded();
	testStarted("test_findLast_element_for_isEven_27");
	setup();
		test_findLast_element_for_isEven_27();
	tearDown();
	testEnded();
	testStarted("test_findLast_element_for_isOdd_28");
	setup();
		test_findLast_element_for_isOdd_28();
	tearDown();
	testEnded();
	testStarted("test_findLast_element_for_double_29");
	setup();
		test_findLast_element_for_double_29();
	tearDown();
	testEnded();
	testStarted("test_find_last_element_for_string_30");
	setup();
		test_find_last_element_for_string_30();
	tearDown();
	testEnded();
	testStarted("test_to_count_the_number_of_elements_31");
	setup();
		test_to_count_the_number_of_elements_31();
	tearDown();
	testEnded();
	testStarted("test_count_matching_double_elements_32");
	setup();
		test_count_matching_double_elements_32();
	tearDown();
	testEnded();
	testStarted("test_to_count_the_number_of_string_elements_33");
	setup();
		test_to_count_the_number_of_string_elements_33();
	tearDown();
	testEnded();
	testStarted("test_to_count_structure_element_34");
	setup();
		test_to_count_structure_element_34();
	tearDown();
	testEnded();
	testStarted("test_to_filter_element_from_integer_array_35");
	setup();
		test_to_filter_element_from_integer_array_35();
	tearDown();
	testEnded();
	testStarted("test_to_filter_element_from_double_array_36");
	setup();
		test_to_filter_element_from_double_array_36();
	tearDown();
	testEnded();
	testStarted("test_to_filter_element_from_string_array_37");
	setup();
		test_to_filter_element_from_string_array_37();
	tearDown();
	testEnded();
	testStarted("test_for_map_src_to_destn_using_mul_convert_func_38");
	setup();
		test_for_map_src_to_destn_using_mul_convert_func_38();
	tearDown();
	testEnded();
	testStarted("test_for_map_src_to_destn_using_mul_convert_func_double_43");
	setup();
		test_for_map_src_to_destn_using_mul_convert_func_double_43();
	tearDown();
	testEnded();
	testStarted("test_for_map_src_to_destn_using_mul_convert_func_float_44");
	setup();
		test_for_map_src_to_destn_using_mul_convert_func_float_44();
	tearDown();
	testEnded();
	testStarted("test_for_map_src_to_destn_using_sum_convert_func_39");
	setup();
		test_for_map_src_to_destn_using_sum_convert_func_39();
	tearDown();
	testEnded();
	testStarted("test_for_map_string_37");
	setup();
		test_for_map_string_37();
	tearDown();
	testEnded();
	testStarted("test_reduce_add_int_elements_40");
	setup();
		test_reduce_add_int_elements_40();
	tearDown();
	testEnded();
	testStarted("test_for_foreach_using_mul_convert_func_41");
	setup();
		test_for_foreach_using_mul_convert_func_41();
	tearDown();
	testEnded();
	testStarted("test_for_foreach_using_mul_convert_func_for_double_45");
	setup();
		test_for_foreach_using_mul_convert_func_for_double_45();
	tearDown();
	testEnded();
	testStarted("test_for_foreach_using_mul_convert_func_for_float_46");
	setup();
		test_for_foreach_using_mul_convert_func_for_float_46();
	tearDown();
	testEnded();

	summarizeTestCount();
	fixtureTearDown();
	return 0;
}

void fixtureSetup(){}

void fixtureTearDown(){}
