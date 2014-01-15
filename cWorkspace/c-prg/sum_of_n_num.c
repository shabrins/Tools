#include <stdio.h>
int main(){
 int num,sum=0;
  printf("Enter -1 to exit \n");
 while(num!=-1)
{
   printf("Enter the number \n");
   scanf("%d",&num);
   if(num!=-1)
      sum+=num;
   }
   printf("Sum of entered numbers = %d\n",sum);
	return 0;
};
 