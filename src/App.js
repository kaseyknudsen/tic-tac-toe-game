import { ButtonGroup, Button, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" mb={4} >Tic Tac Toe</Typography>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        color="info"
        size="medium"
        sx={{ columnGap: 2, marginBottom: 1 }}
      >
        <Button sx={{ p: 3 }}></Button>
        <Button sx={{ p: 3 }}></Button>
        <Button sx={{ p: 3 }}></Button>
      </ButtonGroup>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        color="info"
        size="medium"
        sx={{ columnGap: 2, marginBottom: 1 }}
      >
        <Button sx={{ p: 3 }}></Button>
        <Button sx={{ p: 3 }}></Button>
        <Button sx={{ p: 3 }}></Button>
      </ButtonGroup>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        color="info"
        size="medium"
        sx={{ columnGap: 2 }}
      >
        <Button sx={{ p: 3 }}></Button>
        <Button sx={{ p: 3 }}></Button>
        <Button sx={{ p: 3 }}></Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
