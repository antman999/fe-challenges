import useTicTacToe from "./useTicTacToe";
export function TicTacToe() {
  const { board, resetBoard, getStatusMessage, handleClick } = useTicTacToe();
  return (
    <div className="max-w-sm mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-semibold">{getStatusMessage()}</div>
        <button
          onClick={resetBoard}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Restart
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {board.map((boardPiece, index) => {
          return (
            <button
              className="w-24 h-24 text-4xl font-bold text-black cursor-pointer border-2 border-solid border-gray-400 rounded-lg transition-colors duration-200
                         hover:bg-gray-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-transparent
                         flex items-center justify-center"
              key={index}
              onClick={() => handleClick(index)}
              disabled={boardPiece !== null}
              aria-label={`Square ${index + 1}: ${boardPiece || "Empty"}`}
            >
              {boardPiece}
            </button>
          );
        })}
      </div>
    </div>
  );
}
