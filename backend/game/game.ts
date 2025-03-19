let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let currentPlayer = "X";
// -------------------------------------------
// Also we can define like
// let five = 5; 
// or 
// let five : number = 5 --> It's more especific
//
// ----------------- Remeber -----------------
// variable --> let
// constant --> const
// -------------------------------------------

// Resets the board and current player
function cleanGame() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    currentPlayer = "X";
    return board;
}


// Make a move at a given row and col if the cell is empty.
// Returns the updated board and info on current turn or win.
function makeMove(row, col) {
    if (board[row][col] !== "") {
        return { error: "Invalid move, cell already taken", board };
    }
    board[row][col] = currentPlayer;
    const winner = checkWinner();
    const result = { 
        board, 
        winner: winner ? currentPlayer : null,
        currentPlayer: winner ? null : currentPlayer // If there's a winner, no next player
        // It's a ternary operator -->  // condition ? valueIfTrue : valueIfFalse //
    };
    if (!winner) {
        // Switch players only if no winner
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        result.currentPlayer = currentPlayer;
    }
    return result;
}

// -------------------------------------------
// In Javascript / Typescript we have operator 
// -------------------------------------------
// Stric mode
// === or !==
// Examples
// 2 === 2;       // true
// 2 === '2';     // false (different types: number vs. string)
// 2 !== 2;       // false (they're the same value and type)
// 2 !== '2';     // true  (different types)
// -------------------------------------------
// And also have a normal equality
// != or ==
// Examples
// 2 == '2';   // true (type coercion happens)
// 2 === '2';  // false (strict comparison, different types)
// -------------------------------------------


// Check all winning conditions
function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2])
        return true;
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
      if (board[0][j] && board[0][j] === board[1][j] && board[1][j] === board[2][j])
        return true;
    }
    // Check diagonals
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2])
      return true;
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0])
      return true;
    return false;
  }
  
  // Return the current board state
  function getBoard() {
    return board;
  }
  
  module.exports = { cleanGame, makeMove, getBoard };