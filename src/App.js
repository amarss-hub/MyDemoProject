import React, { useState } from 'react';

import './App.css';
import Form1 from './Components/Form1';
import Form2 from './Components/Form2';
import CounterApp from './Components/CounterApp';
import BackgroundColor from './Components/BackgroundColor';

function App() {



  return (
    <div>
      <CounterApp />
     
      <BackgroundColor />
    </div>
  );
}

export default App;
