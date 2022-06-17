import React from 'react';
import { Login, CheckIn, SearchBar } from './components';


import './App.css';
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Home/>
    </div>
  );
}

export default App;
