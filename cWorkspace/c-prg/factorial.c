#include <stdio.h>
#include "library.h"
int main(){
	int num,result;
    printf("enter the number : ");
	scanf("%d",&num);
	result = fact(num);
	printf("factorial is = %d",result);
	return 0;
}
