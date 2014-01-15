#include <stdio.h>
typedef struct {
 char name[50];
 int roll; 
 float marks1;
 float marks2; 
 float marks3;
 double sum; 
 double avg; 
} student;

int main(){
  student s[3];
int i; 
  printf("Enter information of students:\n"); 
  for(i=0;i<3;++i) {
      s[i].roll=i+1; 
      printf("\nFor roll number %d\n",s[i].roll);
      printf("Enter name: ");
      scanf("%s",s[i].name);
      printf("Enter marks: ");
      scanf("%f%f%f",&s[i].marks1,&s[i].marks2,&s[i].marks3); 
      printf("\n"); 
  } 
  printf("Displaying information of students:\n\n");
      printf("\nInformation for roll number %d:\n",i+1); 
  for(i=0;i<3;++i) { 
      printf("Name: \n"); 
      puts(s[i].name);
      printf("\n");  
      printf("Mark1: %.1f\tmarks2: %.1f\tmarks3: %.1f",s[i].marks1,s[i].marks2,s[i].marks3);
      printf("\n");  

  } 
  for(i=0; i<3; i++){
      s[i].sum = s[i].marks1+s[i].marks2+s[i].marks3;
      s[i].avg=s[i].sum/3;
    }
    for(i=0; i<3; i++){
      printf("sum%.0lf of %s",s[i].sum,s[i].name);
      printf("\n");  

    }
  
    for(i=0; i<3; i++){
      printf("\n");  
      printf("avg%.0lf",s[i].avg);
      printf("\n");  

    }

 return 0;
} 


