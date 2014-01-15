#include <math.h>
#include <stdio.h>
int main(){
	char name[256];
	int num=18;
	printf("Whats your name?\n");
	gets(name);
	printf("Hello %s\n", name);
	printf("square root if %d is %.0f\n", num , sqrt(num));
	return 0;
}