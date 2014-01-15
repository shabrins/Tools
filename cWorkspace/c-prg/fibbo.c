#include <stdio.h>
#include "library.h"
int main(){   
   int num,result;
    printf("Enter any positive integer : ");
    scanf("%d",&num);
    result = fibbo(num);
    printf("fibbonacci series number is :%d  ",result);
    return 0;
} 