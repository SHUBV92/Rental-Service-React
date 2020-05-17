import React from 'react';
import './App.css';
import Booking from './Containers/Booking';
import Cars from './Containers/Cars';
import IPC from './Containers/IPC/IPC'


function App() {
  return (
    <div className="App">
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
