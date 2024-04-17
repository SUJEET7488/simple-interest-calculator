import PropTypes from 'prop-types';
function Input({inputId,placeValue,inputValue=0,setFunction}){
 

    return <>
    <div className="input">
    <label  htmlFor="inputId">
     {placeValue}
     </label>
    <input type="number"
    id={inputId}
    placeholder={placeValue}
    value={inputValue} 
    onChange={(e)=>setFunction(e.target.value)}
    
    />
   
    </div>
    </>
}
Input.propTypes={
    classNames:PropTypes.string,
    inputId:PropTypes.string,
    placeValue:PropTypes.string,
    inputValue:PropTypes.number,
    setFunction:PropTypes.func
}
export default Input;