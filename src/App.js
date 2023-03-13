import { ButtonGroup, Button, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
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
    return letter;
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
    </div>
  );
}

export default App;
