#include <stdio.h>
int main(){
	int limit,index,a=0,b=0;
	scanf("%d",&limit);
	for (index = 0; index < limit; ++index){
	 printf("%d,a++->%d,b++->%d \n",index,a++,++b);
	}
	return 0;
}