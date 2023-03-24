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

  //call both getLetter and updateCounter at the same level from updateGridAndCheckWin
  const getLetter = () => {
    let letter;
    updateCounter()
    counter % 2 === 0 ? (letter = "X") : (letter = "O");
    return letter;
  };

  const updateCounter = () => {
    setCounter(prevCount => prevCount + 1)
  }

  const updateArray = (boxNumber) => {
    const newGrid = [
      ...grid.slice(0, boxNumber),
      getLetter(),
      ...grid.slice(boxNumber + 1),
    ];
    return newGrid
  }

  const updateGridAndCheckWin = (boxNumber) => {
    if (grid[boxNumber] || win) {
      return;
    }
    updateArray(boxNumber)
    setGrid(updateArray(boxNumber));
    checkWin(updateArray(boxNumber));
  };

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
    const isWin = winConditions.some((condition) => {
      console.log(`condition: ${condition}`);
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
