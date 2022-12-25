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

//an array could hold diffrent types of data
var ourArray = [18,64, "help"]

//you can specify what data you want to select in array by doint the following

var ourArray =[18,64,89];
var ourData = ourArray [0]; //equals 18

//you can update an array by changing something in the array by doing tthe following

var myArray = [18,64,99];
myArray[0] = 45;
console.log(myArray)  // the new answer would be [45,64,99]

//you can force a second array in another array by using the .push finction

var ourArray = ["Stimpson","j","cat"];
ourArray.push(["happy","joy"]);
console.log(ourArray) //answer would be ["Stimpson","j","cat",["happy","joy"]]

//you may be able to remove an item from an array by using .pop

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
//removedFromOurArray now equals 3 and ourArray now equals[1,2](side note when using.pop the last variable in the array will be removed by default in this case it was the three unless specified diffrently)

//the .shift function works exactly like the .pop function in an Array except it will remove the forst variable as oppsed to the last

// the .unshift function will do the exact opposite of the .shift function and add something to the beggining of the array

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); //ourArray now equals ["J","cat"]
ourArray.unshift("Happy");
//ourArray noe equals ["Happy","J","cat"]




//FUNCTIONS
//A function will run a command you tell it to run as well as declaring a comand

function ourReusableFunction() {
  console.log("Heyya, Wolrd")
}
ourReusableFunction();
//now everytime we run the "ourReusableFunction();" line in the consolit will tell us Heyya World