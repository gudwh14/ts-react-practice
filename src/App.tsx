import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./ComponentPractice/Hello";
import {log} from "util";
import MyForm from "./inputState/MyForm";
import Counter from "./useReducer/Counter";

function App() {
  return (
    <div className="App">
      {/*<Hello name={"JJO"} optional={"Option!"} onClick={(name: string)=>{console.log(name)}}/>*/}
      {/*<MyForm onSubmit={(form : {name : string , age : number})=>{console.log(form)}}/>*/}
      <Counter/>
    </div>
  );
}

export default App;
