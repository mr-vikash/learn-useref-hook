
import { useEffect, useState,useRef } from 'react';
import './App.css';
import Header from './components/Header'
const App =()=>
{
  const [input,setInput] = useState("");
  // const prevState = useRef("")

  const inputField = useRef();

  // useEffect(()=>{
  //     // setCounter(counter + 1); At this case we have need to use useRef
  //     // counter.current = counter.current + 1;

  //     // also use for restore previous state
  //     prevState.current = input;

  // },[input])

  const changeHandler =(e)=>{
    setInput(e.target.value);
  }

  const handleFocus = () =>
  {
    inputField.current.focus();
  }
  return(
    <div>
      <Header/>
      <input ref={inputField} value={input} onChange={changeHandler}/>
      <button onClick={()=>{
        // inputField.current.focus();
        handleFocus()
      }}>Click me for focus</button>
      {/* <h4>One Letter Before Text  is {prevState.current}</h4> */}
      {/* <h3>Component Rerendered  = {counter.current}</h3> */}
    </div>
  );
}
export default App;
