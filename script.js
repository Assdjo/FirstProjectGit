// returns index of move
function solveTTT(board) {
    let tabOne = []
    let tabTwo = []
    let tabThree = []
  if (board.length===9) {
    tabOne = board.slice(0, 3).join(" | ")+'\n---+---+---\n'
    tabTwo = board.slice(3, 6).join(" | ") +'\n---+---+---\n'
    tabThree = board.slice(6, 9).join(" | ")
    board = tabOne + tabTwo + tabThree
    console.log(board);
    

  } else {
    return console.log("entrez un tableau de 09 caratère");
    
  }

  return board
}
solveTTT([' ', ' ', ' ', 'O', ' ', ' ', 'X', ' ', ' '])