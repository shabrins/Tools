var fact= function(n)
{
    if(n < 2)
    return 1;
else
    return n * fact(n-1);
}

var fibo=function(limit)
{
  if(limit<=0)
    return ("The input is wrong");
  else if(limit==1)
  {
    return 0;
  }
  else if(limit==2)
    {
      return 1;
    }
  else if(limit>2)
    {
      return(fibo(limit-1)+fibo(limit-2));
    }
}


var fibo3=function(n)
{
  if(n<=0)
    return ("The input is wrong");
  else if(n==1)
  {
    return 0;
  }
  else if(n==2)
    {
      return 1;
    }
    else if(n==3)
    {
      return 1;
    }
  else if(n>3)
    {
      return(fibo3(n-1)+fibo3(n-2)+fibo3(n-3));
    }
}

exports.factorial=fact;
exports.fibbonaci=fibo;
exports.fibbonaci3=fibo3;


var res=0;
var r=0;
var sum=function(n)
{
 if(n>0)
    {
  r=n%10;
  res=res+r;
  n=(n-r)/10;
 
  sum(n);
  }
  return res;
}

exports.sum1=sum;

a=[];
var atm=function(n)
{
  
  if(n>=1000)
  {
    a[0]=(n/1000);
    n=(n%1000);

    atm(n);
  }
  else if(n>=500)
  {
    a[1]=(n/500);
    atm(n%500);
  }
  else if(n>=100)
  {
    a[2]=(n/100);
    atm(n%100);
  }
  else if(n>=50)
  {
    a[3]=(n/50);
    n=(n%50);

    atm(n);
  }
  else if(n>=20)
  {
    a[4]=(n/20);
    atm(n%20);
  }
  else if(n>=10)
  {
    a[5]=(n/0);
    atm(n%10);
  }
  else if(n>=5)
  {
    a[6]=(n/5);
    n=(n%5);

    atm(n);
  }
  else if(n>=2)
  {
    a[7]=(n/2);
    atm(n%2);
  }
  else if(n>=1)
  {
    a[8]=(n/1);
    atm(n%1);
  }
  return a;
}

exports.ATM=atm;

