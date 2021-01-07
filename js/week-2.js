var firstName = "Mari";

var numCharacters = firstName.length;

console.log(numCharacters);

//* Above: uses the .length-property to calculate number of characters in the console *//

var lower = firstName.toLowerCase();

console.log(lower);

//* Above: example of using method instead of property. Methods are called by using ()*//

var upper = firstName.toUpperCase();

console.log(upper);

//* Letter caps: this shows that upper and lower case letters are NOT the same in Java*//

var firstLetter = "G";
var secondLetter = "g";

if (firstLetter === secondLetter) {
    console.log("Letters are equal");
}
else {
    console.log("Letters are NOT equal");
}

//* This shows that lower/uppercase letters are not the same in longer string values also *//

var enteredName = "harry";
var requiredName ="Harry";

if (enteredName === requiredName) {
    console.log("Name accepted");
}
else {
    console.log("Name not accepted");
}

//* To work around the above exapmple where the name is not accepted, you can use a method to convert both variables to lower case, making both versions of the name accepted *//

if (enteredName.toLowerCase() === requiredName.toLowerCase()) {
    console.log("Name accepted");
}
else {
    console.log("Name not accepted");
}

//* In the above example, both variables have been converted to lower case, so writing upper or lowercase doesn't matter anymore. This is helpful where users write input. *//


//* Here we use the && operator, to check if more than one condition is true in an if statement *//

var selectedNumber = 70;
var lowerLimit = 10;
var upperLimit = 50;

if ((selectedNumber >= lowerLimit) && (selectedNumber <=upperLimit)) {
    console.log("Within range");
}
else{
    if (selectedNumber < lowerLimit) {
        console.log("Number is too low");
    }
    if (selectedNumber > upperLimit){
        console.log("Number is too high");
    }
}

//* Example from video: the strict kitten school lol. This is an example of nested if statements using the && operator *//

// requirements:
// cat
// under 2 years
// friendly

// var petType = "dog";
// var age = 6;
// var isFriendly = false;

// if((petType === "cat") && (age < 2) && (isFriendly === true)){
//     console.log("Pet accepted");
// }
// else{
//     if (petType !== "cat"){
//         console.log("Pet must be a cat lol");
//     }
//     if (age >= 2){
//         console.log("Pet must be under 2 years");
//     }
//     if (isFriendly !== true){
//         console.log("Pet must be friendly and not eat the other pets");
//     }
// }

//* Here we rewrite the code above to use OR operation, the ||, that says only one condition needs to be true for consolelog *//

var petType = "cat";
var age = 6;
var isFriendly = true;

if((petType !== "cat") || (age >= 2) || (isFriendly !== true)){
    console.log("Pet not accepted");

    if (petType !== "cat"){
        console.log("Pet must be a cat lol");
    }
    if (age >= 2){
        console.log("Pet must be under 2 years");
    }
    if (isFriendly !== true){
        console.log("Pet must be friendly and not eat the other pets");
    }

}
else{
 console.log("Pet accepted");
}


//* Another example of || *//

var number = 14;

// 10, 14 are winning numbers

if((number === 10) || (number === 14)) {
    console.log("You won!");
}
else {
    console.log("You've lost :(");
}


//* LESSON 2: ARRAYS: several values inside one variable *//

//Shopping list:
//bananas
//a few frogs
//some rats

//* The shopping list showed as single variables: *//

// var item1 = "bananas";
// var item2 = "a few frogs";
// var item3 = "some rats";

//* In order to store all the values inside one variable, we do this:*//

var shoppingList = ["bananas", "a few frogs", "some rats"];

console.log(shoppingList);

//* Here we count the number of items in the array *//

console.log(shoppingList.length);

//* We can use the push method to add items to an array *//

shoppingList.push("cheese");

//* Now we need to log the shopping list again, aftes using the push method *//

console.log(shoppingList);

//* Another method: the sort method *//

//console.log(shoppingList.sort());

//* Like above or under, where the code is easier to read *//

var sortedList = shoppingList.sort();
console.log(sortedList);


//* Here is how to find the index (position) of the array. First item is always 0 *//

var shoppingList = ["bananas", "a few frogs", "some rats"];

var item = shoppingList[0];

console.log(item);

//* underneath is for loop (we've learned this earlier), counting down *//

for (var i = 0; i < 4; i++) {
    console.log(i);
}

//* We often don't know the number of items in an array, so we can write list.length instead of the number in the above example: i < list.length *//

//* new example (i'm getting confused)*//

var list = ["bananas", "a few frogs", "some rats", "cheese"];

for (var i = 0; i < 4; i++) {

    console.log(i);

    var item = list[i];

    console.log(item);
}

//* above the first console log logs the value of i (the loops), and the second logs the value of item*//

//* One more example *//

//var colours = ["red", "blue", "green"];

//for (var i = 0; i < colours.length; i++) {
//    console.log(colours[i]);
//}

//* A version that may be easier to read *//

var colours = ["red", "blue", "green"];

for (var i = 0; i < colours.length; i++) {
    var col = colours[i];
    console.log(col);
}

//* above has the same effect, but here youre making another variable with the [] there instead of in the console log *//


