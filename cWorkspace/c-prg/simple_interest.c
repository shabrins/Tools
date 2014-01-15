#include <stdio.h>
#include "library.h"
int main(){
	int p,n,r,result;
    printf("Enter the Principal amount : ");
	scanf("%d",&p);
	printf("Enter the Time: ");
	scanf("%d",&n);
	printf("Enter the Rate: ");
	scanf("%d",&r);
	result = simple_int(p,n,r);
	printf("Simple interest is = %d",result);
	return 0;
}