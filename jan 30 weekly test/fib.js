var temp = prompt("Enter the limit of fibanoic series");

    var limit = parseInt(temp);
    var first = 0;
    var secound = 1;
    var sum = secound + first;
    console.log(first);
    console.log(secound);
    console.log(sum);
    for(i=4; i<=limit; i++)
{
   first = secound;
   secound = sum;
   sum = secound + first;
   console.log(sum);
}