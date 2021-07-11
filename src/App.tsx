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
import CounterContainerRF from "./Redux/ReduxToolkit/components/CounterContainerRF";
import RouterIndex from "./Router/RouterIndex";
import TodoContainerRF from "./Redux/ReduxToolkit/components/TodoContainerRF";

function App() {
  return (
      // <SampleProvider>
      //   {/*<Hello name={"JJO"} optional={"Option!"} onClick={(name: string)=>{console.log(name)}}/>*/}
      //   {/*<MyForm onSubmit={(form : {name : string , age : number})=>{console.log(form)}}/>*/}
      //   {/*<CounterRF/>*/}
      //   <Sample/>
      // </SampleProvider>
      // <CounterContainer/>
      // <TodoContainer/>
      // <CounterContainerRF/>
      <TodoContainerRF/>
      // <RouterIndex/>
  );
}

export default App;
