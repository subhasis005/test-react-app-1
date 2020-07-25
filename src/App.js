import React from 'react';
import './App.css';
import Nav from './pages/Nav';
import Myroute from './myroute';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/test-react-app-1">
      <Nav />
      <Myroute />
    </BrowserRouter>
  );
}

export default App;
