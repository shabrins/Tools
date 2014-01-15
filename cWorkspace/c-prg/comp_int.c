#include <stdio.h>
#include "library.h"				
int main(){
	int p,n,r,result;
    printf("enter the values of p,n,r  : ");
	scanf("%d,%d,%d",&p,&n,&r);
	result = comp_int(p,n,r);
	printf("compound interest = %d",result);
	return 0;
}