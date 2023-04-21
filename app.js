// Select the table element
const table = document.getElementById('board');

// Set up the game state
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

// Add event listeners to each cell
for (let i = 0; i < table.rows.length; i++) {
  for (let j = 0; j < table.rows[i].cells.length; j++) {
    table.rows[i].cells[j].addEventListener('click', () => {
      // If the cell is already filled or the game is over, do nothing
      if (board[i * 3 + j] !== '' || isGameOver(board)) {
        return;
      }
      
      // Update the board and the current player
      board[i * 3 + j] = currentPlayer;
      table.rows[i].cells[j].innerHTML = currentPlayer;
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      
      // Check if the game is over
      if (isGameOver(board)) {
        alert('Game over!');
      }
    });
  }
}

// Function to check if the game is over
function isGameOver(board) {
  // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (board[i] !== '' && board[i] === board[i + 1] && board[i] === board[i + 2]) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[i] !== '' && board[i] === board[i + 3] && board[i] === board[i + 6]) {
      return true;
    }
  }

  // Check diagonals
  if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
    return true;
  }
  if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
    return true;
  }

  // Check for tie game
  if (!board.includes('')) {
    return true;
  }

  // Game is not over
  return false;
}
