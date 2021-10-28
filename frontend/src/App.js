import logo from './logo.svg';
import './App.css';
import {useTranslation} from "react-i18next";
import Button from '@mui/material/Button';

function App() {

  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('generic:yes')}
        </p>
        <Button variant="contained" color="primary">Text</Button>
      </header>
    </div>
  );
}

export default App;
