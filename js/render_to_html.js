const CELLS = [];

function initBoard(playgroud, width, height) {
  for (let y = 0; y < height; y++) {
    CELLS[y] = [];
    for (let x = 0; x < width; x++) {
      const elem = document.createElement("div");
      elem.className = "tetris__cell";
      CELLS[y][x] = elem;
      playgroud.append(elem);
    }
  }
}

function renderToHTML(board) {
  board.forEach((rows, y) => {
    rows.forEach((value, x) => {
      CELLS[y][x].classList.remove("tetris__cell--active");

      if (value === 1) {
        CELLS[y][x].classList.add("tetris__cell--active");
      }
    });
  });
}

export { initBoard, renderToHTML };
