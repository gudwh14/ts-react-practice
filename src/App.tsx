import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./ComponentPractice/Hello";
import {log} from "util";
import MyForm from "./inputState/MyForm";
import Counter from "./useReducer/Counter";
import ReducerSample from "./useReducer/ReducerSample";
import SampleProvider from "./ContextAPI/SampleContext";
import Sample from "./ContextAPI/Sample";
import CounterContainer from "./Redux/components/CounterContainer";
import TodoContainer from "./Redux/components/TodoContainer";

function App() {
  return (
      // <SampleProvider>
      //   {/*<Hello name={"JJO"} optional={"Option!"} onClick={(name: string)=>{console.log(name)}}/>*/}
      //   {/*<MyForm onSubmit={(form : {name : string , age : number})=>{console.log(form)}}/>*/}
      //   {/*<Counter/>*/}
      //   <Sample/>
      // </SampleProvider>
      // <CounterContainer/>
      <TodoContainer/>
  );
}

export default App;
