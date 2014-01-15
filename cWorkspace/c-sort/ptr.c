#include <stdio.h>
main(){
	int arr[5]={1,5,3,7,4};
	int *ptr;
	int i;
	ptr=&arr;
	printf("%x\n",ptr);
	for(i=0;i<5;i++){
		printf("elements %d:%x\n",(i+1),*ptr++ );
	}
}