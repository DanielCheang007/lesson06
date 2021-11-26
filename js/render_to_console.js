export default function renderToConsole(board) {
  console.clear();
  // console.log("------------------------------------");
  board.forEach((rows) => {
    console.log(rows);
    // console.log("%c1", "background: #222; color: #bada55");
  });
}
