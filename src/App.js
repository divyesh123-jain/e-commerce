import React from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import Images from './components/Images';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
     <Home />
     <Profile />
     <Images />
     <Navbar />
    </div>
  );
}

export default App;
