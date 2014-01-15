#include <stdio.h>
#include "library.h"
int main(){   
   int num1,num2,lcm;
    printf("Enter first number : ");
    scanf("%d",&num1);
    printf("Enter second number : ");
    scanf("%d",&num2);
    if(num1>num2)
         lcm = mylcm(num1,num2);
    else
         lcm = mylcm(num1,num2);
    printf("LCM of two integers is %d",lcm);
    return 0;
}   