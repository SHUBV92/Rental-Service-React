import React from 'react';
import './App.css';

import Booking from './Containers/Booking';
import Cars from './Containers/Cars/Cars';
import IPC from './Containers/IPC/IPC'
import Navbar from './Containers/Navbar/Navbar'



function App() {
  return (
    <div className="App">
      <Navbar />
     <Booking />
     <hr />
     <Cars />
     <hr />
     <IPC />
     <hr />

    </div>
  );
}

export default App;
