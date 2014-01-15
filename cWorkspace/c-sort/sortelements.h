#include <stddef.h>
typedef const void* ConstantVoidPtr;
typedef char* String;
typedef struct {
	String format;
	size_t limit;
	size_t elementSize;
	int (*compare) (ConstantVoidPtr a,ConstantVoidPtr b);
	void (*retriveItem) (ConstantVoidPtr address,String text);
	int str;
} TypeConverter;