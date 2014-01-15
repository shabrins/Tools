#include <stdio.h>
int main(){
	int b = 57;
	int *b_ptr = &b;
	printf("b pointer is = %p\n",b_ptr);
	printf("b pointer with * is %d\n ",*b_ptr);
	printf("b pointer with & is %p\n ",&b_ptr);
 return 0;
}