import {
  ButtonGroup,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [grid, setGrid] = useState(["", "", "", "", "", "", "", "", ""]);
  const [status, setStatus] = useState({
    won: false,
    lost: false,
  });
  const [attempts, setAttempts] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState("rgb(224, 224, 224)");

  const handleWinBackgroundColor = () => {
    setBackgroundColor("gold");
  };
  const handleLoseBackgroundColor = () => {
    setBackgroundColor("rgb(50, 78, 168)");
  };

  //call both getLetter and updateCounter at the same level from updateGridAndCheckWin
  const getLetter = () => {
    let letter;
    updateCounter();
    counter % 2 === 0 ? (letter = "X") : (letter = "O");
    return letter;
  };

  const updateCounter = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const updateArray = (boxNumber) => {
    const newGrid = [
      ...grid.slice(0, boxNumber),
      getLetter(),
      ...grid.slice(boxNumber + 1),
    ];
    return newGrid;
  };

  const updateGridAndCheckWin = (boxNumber) => {
    if (grid[boxNumber] || status.won) {
      return;
    }
    updateArray(boxNumber);
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
      const [a, b, c] = condition;
      return (
        newGrid[a] && newGrid[a] === newGrid[b] && newGrid[b] === newGrid[c]
      );
    });
    if (isWin) {
      setStatus({ ...status, won: true });
      handleWinBackgroundColor();
    }
    if (!isWin) {
      setAttempts((prevCount) => prevCount + 1);
      if (attempts === 9) {
        setStatus({ ...status, lost: true });
        handleLoseBackgroundColor();
      }
    }
  };

  const displayWin = () => {
    if (status.won) {
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
  const displayLost = () => {
    if (status.lost) {
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
    }
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

      {displayWin()}
      {displayLost()}
    </div>
  );
}

export default App;
