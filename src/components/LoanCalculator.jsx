import Input from "./Input";
import '../styles/App.css';
import { useState } from "react";
function App(){
    const [principal,setPrincipal]=useState(0);
    const [rate,setRate]=useState(0);
    const [time,setTime]=useState(0);
  
    
    const [simpleInterest,setSipleInterest]=useState(null);
    const calculate=()=>{
      const simpleInterest=(principal*rate*time)/100;
      setSipleInterest(simpleInterest);
    }
    return <>
    <div className="main">
        <h1>Simple Interest Calculator</h1>
     
        <Input
        inputId="principal"
        placeValue="Principal"
        inputValue={principal}
        setFunction={setPrincipal}
        />

        <Input
        inputId="rate"
        placeValue="Rate"
        inputValue={rate}
        setFunction={setRate}
        />

        <Input
        inputId="time"
        placeValue="Time in yearsxn"
        inputValue={time}
        setFunction={setTime}
        />
       {simpleInterest!=null && <p className="result" id="interest">Simple Interest is Rs {simpleInterest}</p>}
       {simpleInterest!=null && <p className="result" id="amount">Amount with interest is Rs {parseInt(simpleInterest) + parseInt(principal)}</p>}
       
       <button type="button" id="calculate" onClick={()=>calculate()} >Calculate</button>
  
    </div>
    </>
}

export default App;