import {
  ButtonGroup,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";

const updatedArray = (array, index, value) => {
  return [...array.slice(0, index), value, ...array.slice(index + 1)];
};

function App() {
  const [counter, setCounter] = useState(0);
  const [grid, setGrid] = useState(["", "", "", "", "", "", "", "", ""]);
  const [status, setStatus] = useState("playing")
  const [attempts, setAttempts] = useState(1);

  const backgroundColor = status === "won"
    ? "gold"
    : status === "lost"
    ? "#eab676"
    : "#eeeee4";

  const getLetter = () => (counter % 2 === 0 ? "X" : "O");

  const incrementCounter = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const updateGridAndCheckWin = (boxNumber) => {
    if (grid[boxNumber] || status.won) {
      return;
    }
    incrementCounter();
    const newGrid = updatedArray(grid, boxNumber, getLetter());
    setGrid(newGrid);
    checkWin(newGrid);
  };
//factor out checkWin. 1 pure function that determines if there is a win.
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
      const [a, b, c] = condition;
      return (
        newGrid[a] && newGrid[a] === newGrid[b] && newGrid[b] === newGrid[c]
      );
    });
    if (isWin) {
      setStatus("won");
    } else {
      setAttempts((prevCount) => prevCount + 1);
      if (attempts === 9) {
        setStatus("lost");
      }
    }
  };
  /* refactor. create separate component and use props. */
  const displayWin = () => {
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
  };
  const displayLost = () => {
    return (
      <Card
        variant="outlined"
        m={5}
        sx={{
          minWidth: 100,
          marginTop: 5,
          backgroundColor: "red",
          borderRadius: "5%",
        }}
      >
        <CardContent>
          <Typography variant="h5" m={5}>
            {"You Loose 😟😟😢"}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  return (
    <div className="App" style={{ backgroundColor }}>
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
      {status === "won" && displayWin()}
      {status === "lost" && displayLost()}
    </div>
  );
}

export default App;
