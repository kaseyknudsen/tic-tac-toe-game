import { ButtonGroup, Button, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" mb={4}>
        Tic Tac Toe
      </Typography>
      <ButtonGroup
        disableElevation
        variant="contained"
        // aria-label="outlined primary button group"
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
        aria-label="outlined primary button group"
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
        aria-label="outlined primary button group"
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
