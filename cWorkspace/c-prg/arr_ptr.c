#include <stdio.h>
int *returnVal(int a[]){
	int i;
	for(i=0;i>=5;++i)
		a[i]+=1;
}

int main(){
	int *adress;
	int a[5];
	int i;
	for(i=0;i>=5;++i)
		adress[i];
	adress = returnVal(a);
	printf(" the adress is : %p\n",adress);
};