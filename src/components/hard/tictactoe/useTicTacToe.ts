import { useState } from "react";

const emptyBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(emptyBoard());
  const [isXNext, setIsXNext] = useState(true);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (board: (string | null)[]) => {
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) {
      return;
    }

    const updatedBoard = [...board];

    updatedBoard[index] = isXNext ? "X" : "O";
    setBoard(updatedBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) {
      return `Player ${winner} wins!`;
    }

    if (board.every((square) => square !== null)) {
      return "It's a draw!";
    }

    return `Player ${isXNext ? "X" : "O"}'s turn`;
  };

  const resetBoard = () => {
    setBoard(emptyBoard());
    setIsXNext(true);
  };

  return {
    board,
    handleClick,
    calculateWinner,
    getStatusMessage,
    resetBoard,
  };
};

export default useTicTacToe;
