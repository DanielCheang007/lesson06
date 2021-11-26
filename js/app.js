import Agent from "./agent.js";
// import renderToConsole from "./render_to_console.js";
import { initBoard, renderToHTML } from "./render_to_html.js";
import shapeAgent from "./shape_agent.js";

const BOARD = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const BOARD_HEIGHT = BOARD.length;
const BOARD_WIDTH = BOARD[0].length;

const playground = document.querySelector(".tetris");
initBoard(playground, BOARD_WIDTH, BOARD_HEIGHT);

console.log("board: ", BOARD_WIDTH, BOARD_HEIGHT);

const agent = new Agent(BOARD, shapeAgent.currentShape, renderToHTML);

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowDown") {
    agent.moveTo(0, 1);
  }

  if (event.code === "ArrowLeft") {
    agent.moveTo(-1, 0);
  }

  if (event.code === "ArrowRight") {
    agent.moveTo(1, 0);
  }

  if (event.code === "ArrowUp") {
    const shape = shapeAgent.nextShape();
    agent.shape = shape;
    agent.moveTo(0, 0);
  }
});
