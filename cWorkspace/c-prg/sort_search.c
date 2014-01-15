#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "library.h"
int main(int argc, char *argv[])  
{
   int index, firstElement, lastElement, middleElement, size, search, array[100];
 
   printf("Enter number of elements\n");
   scanf("%d",&size);
 
   printf("Enter %d integers\n", size);
 
   for ( index = 0 ; index < size ; index++ )
      scanf("%d",&array[index]);
 
   printf("Enter value to find\n");
   scanf("%d",&search);
 
   firstElement = 0;
   lastElement = size - 1;
   middleElement = (firstElement+lastElement)/2;
 
   while( firstElement <= lastElement )
   {
      if ( array[middleElement] < search )
         firstElement = middleElement + 1;    
      else if ( array[middleElement] == search ) 
      {
         printf("%d found at location %d.\n", search, middleElement+1);
         break;
      }
      else
         lastElement = middleElement - 1;
 
      middleElement = (firstElement + lastElement)/2;
   }
   if ( firstElement > lastElement )
      printf("Not found! %d is not present in the list.\n", search);
 
   return 0;   
}