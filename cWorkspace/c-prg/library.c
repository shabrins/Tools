#include <string.h>
#include "library.h"
#include <stdlib.h>
#include <string.h>

int mylcm(int num1,int num2){
    int result = num1;
     while(1){
         if(result % num2 == 0 && result % num1 == 0)
             break;
         result++;
    }          
   return result;
};

int simple_int(int p,int n,int r){
	return (p*n*r)/100;
};

int fact(int num){
    if(num < 2)
    return 1;
else
    return num * fact(num-1);
};

int comp_int(int p, int n, int r)
{
   int result=0,i;
   for(i=1;i<=n;i++)
   {
       result=(p*r)/100;
       p=p+result;
   }
   return result;
};

int fibbo(int limit){
   int result=1, fibbo1=0 ,fibbo2=1,i;
   if(limit==1)
      return 0;
   else
   {
    for(i=2;i<limit;i++)
     {
      result=fibbo1+fibbo2;
      fibbo1=fibbo2;
      fibbo2=result;
     }
     return result ;
   }
}


int atm_calc(int *adress,int amount,int currency_type[]){
  int count=0;
  for(count=0;count<9;count++){
    *adress=0;
  if(amount>=currency_type[count]){
    *adress=amount/currency_type[count];
    amount%=currency_type[count];
  }
  adress++;
}
return 0;
}

int cmpfunc (const void * a, const void * b)
{
   return ( *(int*)a - *(int*)b );
}

int cmpfunc_string (const void * a, const void * b)
{
   return strcmp( (char*)a,(char*)b );
};

int cmpfunc_float(const void * a,const void * b){
  return ( *(int*)a - *(int*)b );
}


int cmpfunc_double (const void * a, const void * b)
{
   return ( *(double*)a - *(double*)b );
}
