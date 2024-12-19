// src/App.tsx
import React from 'react';
import './App.scss'; // Import global styles if you have any, for example body styles
import FirmFacts from './components/FirmFacts/FirmFacts';

const App: React.FC = () => {
  return (
    <div className="App">
      <FirmFacts />
    </div>
  );
};

export default App;
