#include <stdio.h>
#include <stdlib.h>

struct A
{
	double a;
	int c;
	char b;
};
struct B
{
	char a;
	char pad1;
	char pad2;
	char pad3;
	int c;
	char b;
};

int main(int argc, char const *argv[])
{
	// struct A a;
	void* pS = calloc(1,sizeof(struct A));
	struct A* pA = pS;
	struct B* pB = pS;
	printf("A -> %lf %d %c\n",pA->a,pA->c,pA->b );
	printf("B -> %c %d %c %c %c %c\n",pB->a,pB->c,pB->b,pB->pad1,pB->pad2,pB->pad3 );
	
	printf("A -> %x %x %x\n",&pA->a,&pA->c,&pA->b );
	printf("B -> %x %x %x %x %x %x\n",&pB->a,&pB->c,&pB->b,&pB->pad1,&pB->pad2,&pB->pad3 );
	

	pA->a = 'a';
	pA->b = 'b';
	pA->c = 'c';

	pB->pad1 = '1';
	pB->pad2 = '2';
	pB->pad3 = '3';

	printf("A -> %c %d %c\n",pA->a,pA->c,pA->b );
	printf("B -> %c %d %c %c %c %c\n",pB->a,pB->c,pB->b,pB->pad1,pB->pad2,pB->pad3 );

	printf("A -> %p %p %p\n",&pA->a,&pA->c,&pA->b );
	printf("B -> %p %p %p %p %p %p\n",&pB->a,&pB->c,&pB->b,&pB->pad1,&pB->pad2,&pB->pad3 );
	
	free(pS);
	return 0;
}