#include <stdio.h>
#include "library.h"
int main(){
	int amount,count=0,currency[9];
	int currency_type[9]={1000,500,100,50,20,10,5,2,1};
	printf("Enter the amount : ");
	scanf("%d",&amount);
	atm_calc(&currency[0],amount,currency_type);
	for(count=0;count<9;count++)
	printf(" Currency of %d = %d \n",currency_type[count],currency[count]);
}