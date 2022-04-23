import React,{useState} from 'react';
import './App.css';
import {evaluate} from 'mathjs';
import Button from './components/Button';
import Input from './components/inputPanel';

function App() {
  const specialBtnColor = 'rgb(161, 194, 14)'
  const [input, setInput] = useState(
    localStorage.getItem('input')===null?"":localStorage.getItem('input')
  );
  const [output,setOutput] = useState(
    localStorage.getItem('output')===null?"":localStorage.getItem('output')
  ); 

  const addToInput = (val)=>{
    setInput((input)=>input + val);
    localStorage.setItem('input',input+val)
  }

  const calculateOutput = ()=>{
    try {
      const finalOutput = evaluate(input);
      setOutput(finalOutput);
      localStorage.setItem('output',finalOutput)
    } catch (error) {
      setOutput(error.message)
    }
   
  }

  const clearScreen = ()=>{
    setInput("");
    setOutput("");
  }

  const eraseLastCharacter = ()=>{
    setInput((input)=>input.slice(0,-1))
  }

  const checkoutHistory = ()=>{
    setInput(localStorage.getItem('input'))
  }

  return (
    <div className="App">

        <div className='calc-body'>
          <Input input={input} output={output} setInput={setInput}/>
          <div className='row'>
          <Button view="C" color='rgb(219, 9, 9)' handleClick={clearScreen}/>
          <Button view="✖" color={'rgb(35, 97, 232)'} handleClick={eraseLastCharacter}/>
          <Button view="." color={specialBtnColor} handleClick={addToInput}/>
          <Button view="+" color={specialBtnColor} handleClick={addToInput}/>
          </div>
          <div className='row'>
          <Button view="7" id='7' handleClick={addToInput} />
          <Button view="8" id='8' handleClick={addToInput}/>
          <Button view="9" id='9' handleClick={addToInput}/>
          <Button view="-" id='-' handleClick={addToInput} color={specialBtnColor}/>
          </div>
          <div className='row'>
          <Button view="4" id='4' handleClick={addToInput}/>
          <Button view="5" id='5' handleClick={addToInput}/>
          <Button view="6" id='6' handleClick={addToInput}/>
          <Button view="*" id='*' handleClick={addToInput} color={specialBtnColor}/>
          </div>
          <div className='row'>
          <Button view="1" id='1' handleClick={addToInput}/>
          <Button view="2" id='2' handleClick={addToInput}/>
          <Button view="3" id='3' handleClick={addToInput}/>
          <Button view="/" id='/' handleClick={addToInput} color={specialBtnColor}/>
          </div>

          <div className='row'>
          <Button view="(" id='(' handleClick={addToInput}/>
          <Button view="0" id='0' handleClick={addToInput}/>
          <Button view=")" id=')' handleClick={addToInput}/>
          <Button view="=" id='=' handleClick={calculateOutput} color='rgb(199, 119, 34)' />
          </div>

          <div className='row'>
          <Button view="View Last Query" id="history" handleClick={checkoutHistory}/>
          </div>
          
        </div>
    </div>
  );
}

export default App;
