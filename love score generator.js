// Love Calculator
// first we receive user inpu. In this case we ask for two names
var name1 = prompt("Enter name");
var name2 = prompt("Enter name");
// Then we generate random numbers using Math.random and scale the results up to 100
n = Math.random() * 100;
// Now we'll want to clean up results. Use Math.floor to ensure whole numbers from outputs and add 1 to get 1-100 results.
loveScore = Math.floor(n) + 1;
// get output
alert("You love score this " + loveScore);
