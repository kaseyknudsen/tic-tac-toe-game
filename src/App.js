import {
  ButtonGroup,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";

function App() {
  //create status state: playing, won, lost
  const [counter, setCounter] = useState(0);
  const [win, setWin] = useState(false);
  const [grid, setGrid] = useState(["", "", "", "", "", "", "", "", ""]);
  //const status = ["playing", "won", "lost"];

  //split into 2 functions: getLetter, updateCounter
  //call both at the same level from updateGridAndCheckWin
  const updateAndGetLetter = () => {
    let letter;
    counter % 2 === 0 ? (letter = "X") : (letter = "O");
    setCounter(counter + 1);
    return letter;
  };

  const updateGridAndCheckWin = (boxNumber) => {
    if (grid[boxNumber] || win) {
      return;
    }
    //make a helper function called updateArray and use it here. Put the function outside of the component
    const newGrid = [
      ...grid.slice(0, boxNumber),
      updateAndGetLetter(),
      ...grid.slice(boxNumber + 1),
    ];
    setGrid(newGrid);
    checkWin(newGrid);
  };

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

  const checkWin = (newGrid) => {
    const winConditions = [
      // Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // Diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];
    //.some() returns true if any of the conditions are met
    const isWin = winConditions.some((condition) => {
      console.log(`condition: ${condition}`);
      //destructuring each element from within each condition array
      const [a, b, c] = condition;
      console.log(`a: ${a}, b: ${b}, c: ${c}`);
      return (
        newGrid[a] && newGrid[a] === newGrid[b] && newGrid[b] === newGrid[c]
      );
    });

    if (isWin) {
      setWin(true);
    }
  };

  const displayWin = () => {
    if (win) {
      return (
        <Card
          variant="outlined"
          m={5}
          sx={{
            minWidth: 100,
            marginTop: 5,
            backgroundColor: "green",
            borderRadius: "5%",
          }}
        >
          <CardContent>
            <Typography variant="h5" m={5}>
              {"You Win!"}
            </Typography>
          </CardContent>
        </Card>
      );
    }
  };
  return (
    <div className="App">
      <Typography variant="h2" mb={4}>
        Tic Tac Toe
      </Typography>

      {[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ].map((nums, index) => (
        <ButtonGroup
          disableElevation
          variant="contained"
          color="info"
          sx={{ columnGap: 1, marginBottom: 1 }}
          key={index}
        >
          {nums.map((num, index) => (
            <Button
              sx={{ p: 3 }}
              onClick={() => updateGridAndCheckWin(num)}
              key={index}
            >
              {grid[num]}
            </Button>
          ))}
        </ButtonGroup>
      ))}

      {displayWin()}
    </div>
  );
}

export default App;
