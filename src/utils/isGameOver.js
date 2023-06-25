import calculateWinner from "./calculateWinner";

export default function isGameOver(board, countTurn) {
  const stepsArray = countTurn % 2 !== 0 ? ["x", "o"] : ["o", "x"];

  const fillTheBoard = (board, leftMoves) => {
    let i = 0;
    return board.map((ceil) => {
      if (!ceil) {
        ceil = leftMoves[i];
        i++;
      }
      return ceil;
    });
  };

  const firstCombination = fillTheBoard(board, stepsArray);
  const secondCombination = fillTheBoard(board, stepsArray.reverse());

  if (countTurn > 6) {
    return calculateWinner(firstCombination);
  }
  return (
    calculateWinner(firstCombination) || calculateWinner(secondCombination)
  );
}
