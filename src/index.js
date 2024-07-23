import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Components/PomodoroTimer/PomodoroTimer.css';
import SettingsContextProvider from './Components/PomodoroTimer/context/SettingsContext';

ReactDOM.render(
  
  <React.StrictMode>
    <SettingsContextProvider>
    <App />
    </SettingsContextProvider>,
  </React.StrictMode>,
  
  document.getElementById('root')
);
reportWebVitals();
