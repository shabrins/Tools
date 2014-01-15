var num=function(amount,denomination,num_of_notes)
{
 var notes=[1000,500,100,50,20,10,5,2,1];
if(!denomination)
{
	denomination=0;
	var num_of_notes=[0,0,0,0,0,0,0,0,0];
}
if(amount>=1)
{
	num_of_notes[denomination]=Math.floor(amount/notes[denomination]);
	amount=amount%notes[denomination];
	denomination=denomination+1;
	num(amount,denomination,num_of_notes);
}
//return ("\n notes of 1000="+num_of_notes[0] "\n notes of 500="+num_of_notes[1],"\n notes of 100="+num_of_notes[2],"\n notes of 50="+num_of_notes[3],"\n notes of 20="+num_of_notes[4],"\n notes of 10="+num_of_notes[5],"\n notes of 5="+num_of_notes[6],"\n notes of 2="+num_of_notes[7],"\n notes of 1="+num_of_notes[8]);
return num_of_notes[];
}
			