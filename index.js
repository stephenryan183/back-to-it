/*this is an in line
comment*/
var myName = "Stephen";

var myLastName = "Ryan";

let myMiddleName ="John";

var b =2;
console.log(b);
a = 9;

b = a;

console.log(b);



//Initialixe these three variables

var c = 5;
var d = 10
var e ="I am a ";

c = c + 1;
d = d + 5;
e = e + "string!";

console.log(c,d,e)


// below will give us the sum of the two
var sum = 10 + 10;
console.log(sum)

//below will give us the diffrence between the two

var diffrence = 45 - 9;
console.log(diffrence)

//below will give us the multiplication product

var product = 8 * 10;
console.log(product)

var quotient = 66 / 11;
console.log(quotient)


//below will show how you either incriment(+1) or decrement a number (-1)

var myVar = 11;
 //below is incremnting it
 myVar++;
 //below is decrementing it
 myVar--;

 //if you want quotes in your sting star odd with single quotes to contain those quotes you want in your string
  var myStar = '<a href="http://www.example.com" target=" _blank">Link</a';

//you can combine stings using the + symbol

var myNewString = "this is the start." + "This is the end.";
console.log(myNewString)

//you can also use the += shortcut to combing the string as well

var ourStr = "I come first.";
ourStr += "I come second";
console.log(ourStr)

//you can add variables and strings together

varourName ="freeCodeCamp";
var ourStr = "hello, our name is" + ourName + " , how are you?";


//.length will tell you how many charavters are in a string
var lastNameLength = 0;
var lastName ="LoveLace";
lastNameLength = lastName.length;
console.log(lastNameLength)  // when console logged it will give yout the answer as 8 because there are 8 letters in LoveLace

//bracket nottation will help you find a letter in a string 

var lastName ="LoveLace"

firstLetterOfLasName = lastname[0]
console.log(firstLetterOfLastName) // when console logged it will give us the answer of "L" because of bracket nottaion it starts with 0 moving forward
