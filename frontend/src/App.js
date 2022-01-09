import Rooter from "./navigation/Rooter";
import { SnackbarProvider } from "notistack";
import "./config/ignoreWarnings.js";

function App() {
  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
      <Rooter />
    </SnackbarProvider>
  );
}

export default App;
