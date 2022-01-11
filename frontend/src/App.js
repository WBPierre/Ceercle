import Rooter from "./navigation/Rooter";
import { SnackbarProvider } from "notistack";
import "./config/ignoreWarnings.js";

function App() {
  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'right', vertical: 'top' }} iconVariant={{
        success: '✅',
        error: '✖️',
        warning: '⚠️',
        info: 'ℹ️',
    }} preventDuplicate>
      <Rooter />
    </SnackbarProvider>
  );
}

export default App;
