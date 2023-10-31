import '../style/App.css'
import logo from '../images/logo.png'
import Button from './Button'
import Window from './Window'
import ButtonClear from './ButtonClear'
import { useState } from 'react'
import {evaluate} from 'mathjs'
export default function App() {


    const [input,setInput]=useState('')

    const addInput=val =>{
        setInput(input+val)
    }
    const result=()=>{
        if(input){
            setInput(evaluate(input))
        }else{
            alert('Escribe algo')
        }
        
    }

  return (
    <div className="app">
        <div className="imgContainer">
            <h1>Calculator Antonio </h1>
        </div>
        
        <div className="principal">

            <Window input={input}/>
            <div className="fila">
                <Button settingClick={addInput}>1</Button>
                <Button settingClick={addInput}>2</Button>
                <Button settingClick={addInput}>3</Button>
                <Button settingClick={addInput}>+</Button>
            </div>
            <div className="fila">
                <Button settingClick={addInput}>4</Button>
                <Button settingClick={addInput}>5</Button>
                <Button settingClick={addInput}>6</Button>
                <Button settingClick={addInput}>-</Button>
            </div>
            <div className="fila">
                <Button settingClick={addInput}>7</Button>
                <Button settingClick={addInput}>8</Button>
                <Button settingClick={addInput}>9</Button>
                <Button settingClick={addInput}>*</Button>
            </div>
            <div className="fila">
                <Button settingClick={result}>=</Button>
                <Button settingClick={addInput}>0</Button>
                <Button settingClick={addInput}>.</Button>
                <Button settingClick={addInput}>/</Button>
            </div>
            <div className="fila">
                <ButtonClear settingClear={()=> setInput('')}>Clear</ButtonClear>
            </div>

            
        </div>
    </div>
        
    
  )
}