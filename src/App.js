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
  const [displayYouWin, setDisplayYouWin] = useState("");
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
    checkWin()
    return letter;
  };

  const checkWin = () => {
    //rows
    switch (true) {
      case (grid.box1 === "X" && grid.box2 === "X" && grid.box3 === "X") ||
        (grid.box1 === "O" && grid.box2 === "O" && grid.box3 === "O"):
        setWin(true);
        break;
      case (grid.box4 === "X" && grid.box5 === "X" && grid.box6 === "X") ||
        (grid.box4 === "O" && grid.box5 === "O" && grid.box6 === "O"):
        setWin(true);
        break;
      case (grid.box7 === "X" && grid.box8 === "X" && grid.box9 === "X") ||
        (grid.box7 === "O" && grid.box8 === "O" && grid.box9 === "O"):
        setWin(true);
        break;
      //columns
      case (grid.box1 === "X" && grid.box4 === "X" && grid.box7 === "X") ||
        (grid.box1 === "O" && grid.box4 === "O" && grid.box7 === "O"):
        setWin(true);
        break;
      case (grid.box2 === "X" && grid.box5 === "X" && grid.box8 === "X") ||
        (grid.box2 === "O" && grid.box5 === "O" && grid.box8 === "O"):
        setWin(true);
        break;
      case (grid.box3 === "X" && grid.box6 === "X" && grid.box9 === "X") ||
        (grid.box3 === "O" && grid.box6 === "O" && grid.box9 === "O"):
        setWin(true);
        break;
      //diagonal
      case (grid.box1 === "X" && grid.box5 === "X" && grid.box9 === "X") ||
        (grid.box1 === "O" && grid.box5 === "O" && grid.box9 === "O"):
        setWin(true);
        break;
      case (grid.box3 === "X" && grid.box5 === "X" && grid.box7 === "X") ||
        (grid.box3 === "O" && grid.box5 === "O" && grid.box7 === "O"):
        setWin(true);
        break;
      default:
        setDisplayYouWin("You loose!");
    }
    win ? setDisplayYouWin("You Win!") : setDisplayYouWin(null);
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
              {displayYouWin}
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

/* questions
1) how do i make it so that the user can't change the boxes once they've clicked
2) why is setWin not updating as soon as there are 3 in a row. It's updating on the next one.
3) how to clear the board once setWin is true
4) why is the You Win box not showing up immediately with the text? */

// const checkWin = () => {
//   //rows
//   if (grid.box1 === "X" && grid.box2 === "X" && grid.box3 === "X") {
//     setWin(true);
//   } else if (grid.box1 === "O" && grid.box2 === "O" && grid.box3 === "O") {
//     setWin(true);
//   } else if (grid.box4 === "X" && grid.box5 === "X" && grid.box6 === "X") {
//     setWin(true);
//   } else if (grid.box4 === "O" && grid.box5 === "O" && grid.box6 === "O") {
//     setWin(true);
//   } else if (grid.box7 === "X" && grid.box8 === "X" && grid.box9 === "X") {
//     setWin(true);
//   } else if (grid.box7 === "O" && grid.box8 === "O" && grid.box9 === "O") {
//     setWin(true);
//   } //columns
//   else if (grid.box1 === "X" && grid.box4 === "X" && grid.box7 === "X") {
//     setWin(true);
//   } else if (grid.box1 === "O" && grid.box4 === "O" && grid.box7 === "O") {
//     setWin(true);
//   } else if (grid.box2 === "X" && grid.box5 === "X" && grid.box8 === "X") {
//     setWin(true);
//   } else if (grid.box2 === "O" && grid.box5 === "O" && grid.box8 === "O") {
//     setWin(true);
//   } else if (grid.box3 === "X" && grid.box6 === "X" && grid.box9 === "X") {
//     setWin(true);
//   } else if (grid.box3 === "O" && grid.box6 === "O" && grid.box9 === "O") {
//     setWin(true);
//   } //diagonal
//   else if (grid.box1 === "X" && grid.box5 === "X" && grid.box9 === "X") {
//     setWin(true);
//   } else if (grid.box1 === "O" && grid.box5 === "O" && grid.box9 === "O") {
//     setWin(true);
//   } else if (grid.box3 === "X" && grid.box5 === "X" && grid.box7 === "X") {
//     setWin(true);
//   } else if (grid.box3 === "O" && grid.box5 === "O" && grid.box7 === "O") {
//     setWin(true);
//   }
//   win ? setDisplayYouWin("You Win!") : setDisplayYouWin(null);
// };
