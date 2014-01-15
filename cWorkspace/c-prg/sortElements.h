#include <stddef.h>
typedef const void* ConstVoidPtr;
typedef char* String;
typedef void (*ConvertToTextFPtr) (ConstVoidPtr item, String text);
typedef int (*CompareFPtr) (ConstVoidPtr a, ConstVoidPtr b);
	
typedef struct{
	String format;
	size_t elementSize;
	CompareFPtr compare;
	ConvertToTextFPtr toText;
} TypeTool;