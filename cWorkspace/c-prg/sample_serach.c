#include <stdio.h>
#include <string.h>

static int binsearch(char *str[], int max, char *value);

int main(void) {
 /* note, array needs to be sorted for bsearch... */
 char *strings[] = { "bill", "chris", "jason", "randy", "trish" };
 int i, asize, result;

 i = asize = result = 0;

 asize = sizeof(strings) / sizeof(strings[0]);

 for(i = 0; i < asize; i++)
  printf("%d: %s\n", i, strings[i]);

 printf("\n");

 if((result = binsearch(strings, asize, "randy")) != 0)
  printf("`randy' found at position: %d\n", result);
 else
  printf("`randy' NOT found..\n");

 if((result = binsearch(strings, asize, "nick")) != 0)
  printf("`nick' found at %d\n", result);
 else
  printf("`nick' was NOT found..\n");

 return 0;
}
