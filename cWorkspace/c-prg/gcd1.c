 #include <stdio.h>
 int main()
 {
  int n1,n2,rem;
  printf("Enter first number : ");
  scanf("%d",&n1);
  printf("Enter second number : ");
  scanf("%d",&n2);
  if(n2>n1)
  {
    n1=n1+n2;
    n2=n1-n2;
    n1=n1-n2;
  }
  do{
      rem=n1%n2;
      n1=n2;
      n2=rem;
    }while(rem!=0);
  printf("\nGCD of two number is %d",n1);
  return 0;
 }