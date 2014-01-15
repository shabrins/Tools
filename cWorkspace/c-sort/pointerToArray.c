#include <stdio.h>
#include <stdlib.h>

typedef int ten_ints[10];

void printArray(int b[10]){
	int i;
	for (i = 0; i < 10; ++i){
		printf("%d AAAAAAAAAAAAAAAAAAAA ",b[i]);
	}
	printf("\n");
}
void assign(int start, int x[10]){
	int i;
	for (i = 0; i < 10; ++i){
		x[i] = start+i;
	}

}
int main(int argc, char const *argv[])
{
	ten_ints a;
	ten_ints* b;
	ten_ints* d = calloc(4, sizeof(ten_ints));
	int (*c) [10];
	int i;
	b = &a;
	c = b;
	for (i = 0; i < 4; ++i){
		printArray(*(d+i));
		printf("%ddddddd\n",(d+i));  
	}

	for (i = 0; i < 4; ++i){
		assign(i*10, *(d+i));
	}
	printf("-----\n");
	for (i = 0; i < 4; ++i){
		printArray(*(d+i));
	}
	free(d);
	return 0;
}