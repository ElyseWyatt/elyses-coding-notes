//Looping A Triangle Exercise.

//Write a loop that looks like this:
//#
//##
//###
//####
//#####
//######
//#######

for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

//Fizz Buzz Exercise.

//Write a program that uses console.log to print all the numbers from 1 to 100, with //two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and //for numbers divisible by 5 (and not 3), print "Buzz" instead.
//
///

for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}


//Chess Board Exercise.

//Write a program that creates a string that represents an 8×8 grid, using newline //characters to separate lines. At each position of the grid there is either a space //or a “#” character. The characters should form a chess board.
//
// # # # #
//# # # #
// # # # #
//# # # #
// # # # #
//# # # #
// # # # #
//# # # #
//

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);




//Minesweeper.

// In startGame, above lib.initBoard(), write a for loop. This should loop through //the contents of board.cells. (Remember, board.cells is an array of objects.) The //loop's only job should be to call countSurroundingMines once for each cell in //board.cells. You'll need to pass each cell as an argument (the bit in the //parentheses). Assign the result of countSurroundingMines to a property on each cell //object. The new property should be called surroundingMines.
//
//In startGame, use document.addEventListener to call checkForWin every time the left //mouse button is clicked. Add another one that calls checkForWin when the right //mouse button is clicked.
//

function startGame () {
  for (let i = 0; i < board.cells.length; i++ ) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }

document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)

  lib.initBoard()
}


//Filtering out parts of an array. In this instance, we want to filter out any instance of Dog from the array.

var animals = [
{ name: 'Fluffykins', species: 'rabbit'},
{ name: 'Caro',       species: 'dog'},
{ name: 'Hamilton',   species: 'dog'},
{ name: 'Harold',     species: 'fish'},
{ name: 'Ursula',     species: 'cat'},
{ name: 'Jimmy',      species: 'fish'}
]

var dogs []
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog')
  dogs.push(animals[i])
}


//Rewriting using Filter function. This is a much shorter and faster way of writing the code, and gets the same outcome. The Filter function loops through each array.

var dogs = animals.filter(function(animal) {
  return animal.species === 'dog'
})

//Want to just log all the names of the animals? This loops the animals array and pushes it into the names array.

var animals = [
{ name: 'Fluffykins', species: 'rabbit'},
{ name: 'Caro',       species: 'dog'},
{ name: 'Hamilton',   species: 'dog'},
{ name: 'Harold',     species: 'fish'},
{ name: 'Ursula',     species: 'cat'},
{ name: 'Jimmy',      species: 'fish'}
]

var names = []
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}

//We are going to do the same thing with Map instead. It will log the same thing as above.

var names = animals.map(function(animal) {
  return animal.name
})

//Lets now display the entire sentence in each line of our array! This will print the names ans species of each animal in a sentence.

var names = animals.map(function(animal) {
  return animal.name + ' is a ' + animal.species
})

//Let's make it even shorter with this:

var names = animals.map((animal) => animal.name)

//Aaaaaannd, even shorter again!

var names = animals.map((x) => x.name)


//Using Reduce function. The mission is to summarise all //the amounts in the array. We'll end up with a total //amount.

var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

var totalAmount = 0
for (var i = 0; i < orders.length; i++ ) {
  totalAmount += orders[i].amount
}

//We can get the same thing using this:

var totalAmount = orders.reduce(function(sum, order){
  return sum + order.amount
}, 0)

//Let's do the same, but with arrow functions

var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)


///Free Code Camp

//In the editor, use the Car constructor to create a new instance and assign it to myCar.

//Then give myCar a nickname property with a string value.

var myCar = new Car();
myCar.nickname = "Tommy";




///Reverse a string using this initial code:

function reverseString(str) {
 return joinArray;
}
reverseString("hello");

//First, the string needs to be split into an array:

 var splitString = str.split("");

 //Then, it can be reversed:

  var reverseArray = splitString.reverse();

  //Then, it needs to be joined back together:

  var joinArray = reverseArray.join("");

  //Here is the final code all laid out:


  function reverseString(str) {

  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");

  return joinArray;
}

reverseString("hello");




///Factorizing a number:

//Return the factorial of the provided integer.

function factorialize(num) {
  var x = 1;
  for (i =1; i <= num; i++){
    x = x * i;
  }

  return x;
}

factorialize(5);


//initialisation, condition, and control (loops)

for (i = 0; i < 5; i++) {

  console.log("hello " + (i + 1));
}

///array

var myArray = [' Pony', ' Donkey', ' Horse', ' Mule', ' Hinny']


let shortArray = myArray.filter(word => word.length > 5);
console.log("My" + shortArray);

let longArray = myArray.filter(word => word.length <= 5);
console.log("My" + longArray);
