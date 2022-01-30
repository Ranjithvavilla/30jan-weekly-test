var num1 = prompt("Enter the limit of prime number");
var num = parseInt(num1);
if(isNaN(num)
{
   alert("please enter the number")
}
  else
{
  var prime=[];
  for(j=2; j<=num; j++)
{
   

    var isprime=true;
    for(i=2; i<j; i++)
{
    if(j%i === 0 && j!==i)
{
    isprime=false;
}
}
      if (isprime===true)
{
          prime.push(j);
}
}
   console.log("your prime sum is 1 to "num+",is: "+prime)
}