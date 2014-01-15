#include <stdio.h>
#include <stdlib.h>

typedef int* (*FP)(int *);
FP fpArray[10];

int* fa(int* a){return NULL;}
int* fb(int* a){return NULL;}

typedef struct{
	int a;
	char* b;
} A;

A fun1(A a){
	return a;
}
A* fun2();

int main(int argc, char const *argv[])
{
	void* howisthis = &fa;

	A a = {12,"Hello"};
	A b = fun1(a);
	b.b = "goooasas";
	fpArray[0] = &fa;
	fpArray[1] = &fb;

	printf("%p %d %s %p\n",&a, a.a,a.b,a.b);
	printf("%p %d %s %p\n",&b, b.a,b.b,b.b);
	printf("-->%d\n", sizeof(fpArray) );
	return 0;
}