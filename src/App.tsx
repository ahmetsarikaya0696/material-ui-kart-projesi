import { AppBar, Toolbar, Typography } from "@mui/material";
import "./App.css";
import CardList from "./components/CardList";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Kart Projesi</Typography>
        </Toolbar>
      </AppBar>
      <CardList />
    </div>
  );
}

export default App;
