function generateChessboard() {
  const figures = ['Ладья', 'Конь', 'Слон', 'Ферзь', 'Король', 'Слон', 'Конь', 'Ладья'];
  const blackFigures = figures.map(elem => `Ч ${elem}`);
  const whiteFigures = figures.map(elem => `Б ${elem}`);

  const pawns = new Array(8).fill('Пешка');
  const nullArray = new Array(8).fill(null);
  const whitePawns = pawns.map(elem => `Б ${elem}`);
  const blackPawns = pawns.map(elem => `Ч ${elem}`);

  let chessBoard = Array.from({ length: 8 }).map(() => Array.from({ length: 8 }));
  const board = chessBoard.map((_, i) =>
    i === 0 ? Array.from(blackFigures)
      : i === 7 ? Array.from(whiteFigures)
        : i === 1 ? Array.from(blackPawns)
          : i === 6 ? Array.from(whitePawns) : Array.from(nullArray)
  );
  return board;
}

function renderChessboard() {
  const emojis = {
    'Б Ферзь': '♕',
    'Б Король': '♔',
    'Б Слон': '♗',
    'Б Конь': '♘',
    'Б Ладья': '♖',
    'Б Пешка': '♙',
    'Ч Ферзь': '♛',
    'Ч Король': '♚',
    'Ч Слон': '♝',
    'Ч Конь': '♞',
    'Ч Ладья': '♜',
    'Ч Пешка': '♟'
  }
  return generateChessboard().map(el => el.map(el => emojis[el]).join('')).join('\n');
}

console.log(renderChessboard());

module.exports = { generateChessboard, renderChessboard };
