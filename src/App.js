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
    setGrid({box1: letter})
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
        <Button sx={{ p: 3 }} onClick={() => updateBox()}>
          {grid.box1}
        </Button>
        <Button sx={{ p: 3 }}></Button>
        <Button sx={{ p: 3 }}></Button>
      </ButtonGroup>
      <ButtonGroup
        disableElevation
        variant="contained"
        color="info"
        sx={{ columnGap: 1, marginBottom: 1 }}
      >
        <Button sx={{ p: 3 }}></Button>
        <Button sx={{ p: 3 }}></Button>
        <Button sx={{ p: 3 }}></Button>
      </ButtonGroup>
      <ButtonGroup
        disableElevation
        variant="contained"
        color="info"
        sx={{ columnGap: 1 }}
      >
        <Button sx={{ p: 3 }}></Button>
        <Button sx={{ p: 3 }}></Button>
        <Button sx={{ p: 3 }}></Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
