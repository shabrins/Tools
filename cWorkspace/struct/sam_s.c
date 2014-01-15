#include <stdio.h>
 struct subject{
 int sub1; 
 int sub2;
 int sub3; 
 }s1,s2,s3,sum;
  
	int main(){
		printf("subject marks\n");
		printf("Enter sub1: "); 
		scanf("%d",&s1.sub1); 
		printf("Enter sub2: "); 
		scanf("%d",&s2.sub2); 
		printf("Enter sub1: "); 
		scanf("%d",&s3.sub3); 
		sum.sub1=s1.sub1+s2.sub2+s3.sub3; 
		printf("Sum of subjects=%d\n",sum.sub1);
		return 0; 
		}
