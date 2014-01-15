#include <stdio.h>
#include "library.h"
int main(){
	int num1,num2,reminder=1;
	printf("Enter first number : ");
    scanf("%d",&num1);
    printf("Enter second number : ");
    scanf("%d",&num2);
		if(num2>num1)
			num1=num1+num2;
		    num2=num1-num2;
		    num1=num1-num2;
	do{
      reminder=num1%num2;
      num1=num2;
      num2=reminder;
    }while(reminder!=0);
	printf("\nGCD of two number is=%d",num1);
	return 0;
};
