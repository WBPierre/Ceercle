import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n/index';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Move to App.js
import CustomThemeProvider from "./components/context/theme/CustomThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider>
        <App />
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
