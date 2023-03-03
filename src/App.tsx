import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Main from './Components/Main';
// import { data_arr } from './Assets/data';

function App() {
  return (
    <div 
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
