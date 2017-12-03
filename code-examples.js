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


//Filtering out parts of an array.

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
