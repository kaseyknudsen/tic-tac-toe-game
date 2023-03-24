// const checkWin = (newGrid) => {
  //   let isWin = false;
  //   // check rows
  //   for (let i = 0; i < 9; i += 3) {
  //     if (newGrid[i] === "X" || newGrid[i] === "O") {
  //       if (
  //         newGrid[i] === newGrid[i + 1] &&
  //         newGrid[i + 1] === newGrid[i + 2]
  //       ) {
  //         isWin = true;
  //       }
  //     }
  //   }
  //   //check columns
  //   for (let i = 0; i <= 2; i += 1) {
  //     if (newGrid[i] === "X" || newGrid[i] === "O") {
  //       if (
  //         newGrid[i] === newGrid[i + 3] &&
  //         newGrid[i + 3] === newGrid[i + 6]
  //       ) {
  //         isWin = true;
  //       }
  //     }
  //   }
  //   //check diagonals
  //   if (newGrid[0] === "X" || newGrid[0] === "O") {
  //     if (newGrid[0] === newGrid[4] && newGrid[4] === newGrid[8]) {
  //       isWin = true;
  //     }
  //   }
  //   if (newGrid[2] === "X" || newGrid[2] === "O") {
  //     if (newGrid[2] === newGrid[4] && newGrid[4] === newGrid[6]) {
  //       isWin = true;
  //     }
  //   }
  //   if (isWin) {
  //     setWin(true);
  //   }
  // };