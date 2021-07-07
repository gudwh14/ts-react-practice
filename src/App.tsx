import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./ComponentPractice/Hello";
import {log} from "util";

function App() {
  return (
    <div className="App">
      <Hello name={"JJO"} optional={"Option!"} onClick={(name: string)=>{
          console.log(name)}}/>
    </div>
  );
}

export default App;
