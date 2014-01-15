#include <stdio.h>
int sum (float a){
	return a;
}

void demo(int(*ptr)(float a)){
	printf("%0.f the sum is \n",ptr(0.0));
};

int main(){
	demo(sum);
	return 0;
}