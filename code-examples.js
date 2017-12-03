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
