import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainMenu } from './scenes/MainMenu';
import { Game } from './scenes/Game';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;