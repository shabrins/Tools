#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "library.h"
int main(int argc, char *argv[])            
{
   int index;
   double *values;
   int n=argv[1];
   int items=atoi(argv[2]);
   char string_value[items][50];
   values=calloc(values,sizeof(double));
  printf("Enter the elements to be sorted :\n");
   
    if(strcmp(n,"string")==0){
    for (index=0; index<items; ++index)
      scanf("%s",string_value[index]);
    qsort(string_value, items, 50, cmpfunc_string);
    for( index=0 ; index<items; index++ ) {
      printf("%s ", string_value[index] );
    }
   }

   if(strcmp(n,"double")==0){
    for (index=0; index<items; ++index)
      scanf("%lf",&values[index]);
    qsort(values, items, sizeof(double), cmpfunc_double);
    for( index=0 ; index<items; index++ ) {
      printf("%lf ", values[index]);
    }
   }

   if(strcmp(n,"int")==0){
    for (index=0; index<items; ++index)
      scanf("%f",&values[index]);
    qsort(values, items, sizeof(int), cmpfunc_float);
    for( index=0 ; index<items; index++ ) {
      printf("%.0f ", values[index]);
    }
   }

  if(strcmp(n,"float")==0){
    for (index=0; index<items; ++index)
      scanf("%f",&values[index]);
    qsort(values, items, sizeof(float), cmpfunc);
    for( index=0 ; index<items; index++ ) {
      printf("%f ", values[index]);
    }
   }
   return(0);
}

