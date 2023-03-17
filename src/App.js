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
  //refactor
  const checkWin = (newGrid) => {
    let isWin = false;
    //rows
    switch (true) {
      case (newGrid[0] === "X" && newGrid[1] === "X" && newGrid[2] === "X") ||
        (newGrid[0] === "O" && newGrid[1] === "O" && newGrid[2] === "O"):
        isWin = true;
        break;
      case (newGrid[3] === "X" && newGrid[4] === "X" && newGrid[5] === "X") ||
        (newGrid[3] === "O" && newGrid[4] === "O" && newGrid[5] === "O"):
        isWin = true;
        break;
      case (newGrid[6] === "X" && newGrid[7] === "X" && newGrid[8] === "X") ||
        (newGrid[6] === "O" && newGrid[7] === "O" && newGrid[8] === "O"):
        isWin = true;
        break;
      //columns
      case (newGrid[0] === "X" && newGrid[3] === "X" && newGrid[6] === "X") ||
        (newGrid[0] === "O" && newGrid[3] === "O" && newGrid[6] === "O"):
        isWin = true;
        break;
      case (newGrid[1] === "X" && newGrid[4] === "X" && newGrid[7] === "X") ||
        (newGrid[1] === "O" && newGrid[4] === "O" && newGrid[7] === "O"):
        isWin = true;
        break;
      case (newGrid[2] === "X" && newGrid[5] === "X" && newGrid[8] === "X") ||
        (newGrid[2] === "O" && newGrid[5] === "O" && newGrid[8] === "O"):
        isWin = true;
        break;
      //diagonal
      case (newGrid[0] === "X" && newGrid[4] === "X" && newGrid[8] === "X") ||
        (newGrid[0] === "O" && newGrid[4] === "O" && newGrid[8] === "O"):
        isWin = true;
        break;
      case (newGrid[2] === "X" && newGrid[4] === "X" && newGrid[6] === "X") ||
        (newGrid[2] === "O" && newGrid[4] === "O" && newGrid[6] === "O"):
        isWin = true;
        break;
      default:
    }
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
      ].map((nums) => (
        <ButtonGroup
          disableElevation
          variant="contained"
          color="info"
          sx={{ columnGap: 1, marginBottom: 1 }}
        >
          {nums.map((num) => (
            <Button sx={{ p: 3 }} onClick={() => updateGridAndCheckWin(num)}>
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
