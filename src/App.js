import {
  ButtonGroup,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  const [win, setWin] = useState(false);
  const [youWin, setYouWin] = useState("");
  const [grid, setGrid] = useState({
    box1: "",
    box2: "",
    box3: "",
    box4: "",
    box5: "",
    box6: "",
    box7: "",
    box8: "",
    box9: "",
  });

  const updateBox = () => {
    let letter;
    setCounter(counter + 1);
    counter % 2 === 0 ? (letter = "X") : (letter = "O");
    checkWin();
    return letter;
  };

  const checkWin = () => {
    //rows
    if (grid.box1 === "X" && grid.box2 === "X" && grid.box3 === "X") {
      setWin(true);
    } else if (grid.box1 === "O" && grid.box2 === "O" && grid.box3 === "O") {
      setWin(true);
    } else if (grid.box4 === "X" && grid.box5 === "X" && grid.box6 === "X") {
      setWin(true);
    } else if (grid.box4 === "O" && grid.box5 === "O" && grid.box6 === "O") {
      setWin(true);
    } else if (grid.box7 === "X" && grid.box8 === "X" && grid.box9 === "X") {
      setWin(true);
    } else if (grid.box7 === "O" && grid.box8 === "O" && grid.box9 === "O") {
      setWin(true);
    } //columns
    else if (grid.box1 === "X" && grid.box4 === "X" && grid.box7 === "X") {
      setWin(true);
    } else if (grid.box1 === "O" && grid.box4 === "O" && grid.box7 === "O") {
      setWin(true);
    } else if (grid.box2 === "X" && grid.box5 === "X" && grid.box8 === "X") {
      setWin(true);
    } else if (grid.box2 === "O" && grid.box5 === "O" && grid.box8 === "O") {
      setWin(true);
    } else if (grid.box3 === "X" && grid.box6 === "X" && grid.box9 === "X") {
      setWin(true);
    } else if (grid.box3 === "O" && grid.box6 === "O" && grid.box9 === "O") {
      setWin(true);
    } //diagonal
    else if (grid.box1 === "X" && grid.box5 === "X" && grid.box9 === "X") {
      setWin(true);
    } else if (grid.box1 === "O" && grid.box5 === "O" && grid.box9 === "O") {
      setWin(true);
    } else if (grid.box3 === "X" && grid.box5 === "X" && grid.box7 === "X") {
      setWin(true);
    } else if (grid.box3 === "O" && grid.box5 === "O" && grid.box7 === "O") {
      setWin(true);
    }
    if (win) {
      setYouWin("You Win!");
    }
  };

  const displayWin = () => {
    if (win) {
      return (
        <Card
          variant="outlined"
          m={5}
          sx={{
            minWidth: 275,
            marginTop: 5,
            backgroundColor: "red",
            borderRadius: "50%",
          }}
        >
          <CardContent>
            <Typography variant="h5" m={5}>
              {youWin}
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
      <ButtonGroup
        disableElevation
        variant="contained"
        color="info"
        sx={{ columnGap: 1, marginBottom: 1 }}
      >
        <Button
          sx={{ p: 3 }}
          onClick={() => setGrid({ ...grid, box1: updateBox() })}
        >
          {grid.box1}
        </Button>
        <Button
          sx={{ p: 3 }}
          onClick={() => setGrid({ ...grid, box2: updateBox() })}
        >
          {grid.box2}
        </Button>
        <Button
          sx={{ p: 3 }}
          onClick={() => setGrid({ ...grid, box3: updateBox() })}
        >
          {grid.box3}
        </Button>
      </ButtonGroup>
      <ButtonGroup
        disableElevation
        variant="contained"
        color="info"
        sx={{ columnGap: 1, marginBottom: 1 }}
      >
        <Button
          sx={{ p: 3 }}
          onClick={() => setGrid({ ...grid, box4: updateBox() })}
        >
          {grid.box4}
        </Button>
        <Button
          sx={{ p: 3 }}
          onClick={() => setGrid({ ...grid, box5: updateBox() })}
        >
          {grid.box5}
        </Button>
        <Button
          sx={{ p: 3 }}
          onClick={() => setGrid({ ...grid, box6: updateBox() })}
        >
          {grid.box6}
        </Button>
      </ButtonGroup>
      <ButtonGroup
        disableElevation
        variant="contained"
        color="info"
        sx={{ columnGap: 1 }}
      >
        <Button
          sx={{ p: 3 }}
          onClick={() => setGrid({ ...grid, box7: updateBox() })}
        >
          {grid.box7}
        </Button>
        <Button
          sx={{ p: 3 }}
          onClick={() => setGrid({ ...grid, box8: updateBox() })}
        >
          {grid.box8}
        </Button>
        <Button
          sx={{ p: 3 }}
          onClick={() => setGrid({ ...grid, box9: updateBox() })}
        >
          {grid.box9}
        </Button>
      </ButtonGroup>
      {displayWin()}
    </div>
  );
}

export default App;

/* if box1 === X && box2 === X && box3 === X || box1 === O && box2 === O && box3 === O, you win */
