import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Login />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
