#include <stdio.h>
#include <stdlib.h>

void showSizeofDataTypes(){
	char a;
	int b;
	short int c;
	float d;
	double e;
	printf("char %d, int %d, short int %d, float %d, double %d\n",sizeof(a),sizeof(b),sizeof(c),sizeof(d),sizeof(e) );
	printf("unsigned long long %d\n",sizeof(unsigned long long) );
}

void showPointersAndMemorySizes(){
	char a = 'A';
	char *pa = &a;
	char **pb = &pa;
	char sentence[] = "abcdef";
	printf("a %c, pa %p, *pa %c, pb %p, *pb %p, **pb %c\n",a,pa,*pa,pb,*pb,**pb);
	printf("sizes a %d, pa %d, *pa %d\n",sizeof(a),sizeof(pa),sizeof(*pa) );
	pa = sentence;
	printf("*pa %p\n", *pa);
}

void showDynamicAllocation(){
	char *pa = calloc(1,10);
	int i;
	printf("before %s %p\n",pa,pa );
	printf("%d\n",sizeof(pa) );
	for (i = 0; i < 10; ++i)
		pa[i] = 'A' + i;
	pa[5] = 0;
	printf("after %s\n",pa );
	free(pa);
	pa[5] = 'Z';
	printf("done %s\n",pa);
}
#define ZERO 0
#define UNDERCONTROL 1
int sum(int a, int b){
	return a+b;
}
#define MULTIPLY(X,Y) X*Y
#define GOOD(method,BOY) method("GOOD %s",BOY)
void defineExperiment(){
#ifdef UNDERCONTROL
	printf("under control\n");
#else
	printf("not under control\n");
#endif
	printf("%s, %d, %s\n",__FILE__,__LINE__,__DATE__ );

	printf("%d\n",MULTIPLY(12, 5));
	GOOD(printf,"OLD");

}

typedef void* voidPtr;
void showIntegerArray(){
	voidPtr pv= ZERO, pv2;
	int *pI=ZERO, *pI2;
	pv2 = pv;
	pv2++;
	pI2 = pI;
	pI2++;

	printf("%p %p\n",pv,pv2);
	printf("%p %p\n",pI,pI2);
}

int main(int argc, char const *argv[])
{
	//showSizeofDataTypes();
	//showPointersAndMemorySizes();
	// int i;
	// for(i=0;i<1;i++){
	// 	printf("%d\n",i );
	// 	showDynamicAllocation();
	// }
	//showIntegerArray();
	defineExperiment();
	return 0;
}
