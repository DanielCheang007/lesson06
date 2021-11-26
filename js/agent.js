export default class Agent {
  sX = 0;
  sY = 0;

  constructor(board, shape, render) {
    this.board = board;
    this.boardHeight = board.length;
    this.boardWidth = board[0].length;

    this.shape = shape;
    this.render = render;

    this.moveTo(0, 0);
  }

  validate(offsetX, offsetY) {
    let valid = true;
    let bottomTouched = false;

    this.shape.forEach((rows, shapeY) => {
      rows.forEach((value, shapeX) => {
        if (value === 0) {
          return;
        }

        const worldX = this.sX + offsetX + shapeX;
        const worldY = this.sY + offsetY + shapeY;

        if (worldX < 0 || worldX > this.boardWidth - 1) {
          valid = false;
          return;
        }

        if (worldY > this.boardHeight - 1) {
          valid = false;
          bottomTouched = true;
          return;
        }

        if (this.board[worldY][worldX] === 1) {
          valid = false;

          if (offsetY > 0) {
            bottomTouched = true;
          }

          return;
        }
      });
    });

    return { valid, bottomTouched };
  }

  putShapeToBoard() {
    const cloneBoard = JSON.parse(JSON.stringify(this.board));
    const boardHeight = cloneBoard.length;
    this.shape.forEach((rows, shapeY) => {
      rows.forEach((value, shapeX) => {
        const worldX = this.sX + shapeX;
        const worldY = this.sY + shapeY;

        if (value === 1 && worldX > -1 && worldY < boardHeight) {
          cloneBoard[worldY][worldX] = value;
        }
      });
    });

    return cloneBoard;
  }

  clearLines() {
    this.board = this.board.filter((row) => row.includes(0));
    if (this.board.length < this.boardHeight) {
      const missLines = this.boardHeight - this.board.length;
      for (let i = 0; i < missLines; i++) {
        this.board.unshift(new Array(this.boardWidth).fill(0)); // new Array(10).fill(10)
      }
    }
  }

  moveTo(offsetX = 0, offsetY = 0) {
    const { valid, bottomTouched } = this.validate(offsetX, offsetY);

    if (bottomTouched) {
      this.sX = 0;
      this.sY = 0;
      this.board = this.tempBoard;

      this.clearLines();

      this.tempBoard = this.putShapeToBoard();
      this.render(this.tempBoard);
      return;
    }

    if (valid) {
      this.sX = this.sX + offsetX;
      this.sY = this.sY + offsetY;

      this.tempBoard = this.putShapeToBoard();
      this.render(this.tempBoard);
    } else {
      console.log("forbidden move!");
    }
  }
}
