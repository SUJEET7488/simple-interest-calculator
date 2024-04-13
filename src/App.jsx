import './App.css';
function App(){
    return <>
    <div className="main">
        <h1>Simple Interest Calculator</h1>
        <label htmlFor="principal">
            Principal : 
        </label>
        <input type="number" id="principal"  placeholder="Principal"/>

        <label htmlFor="rate">
            Rate : 
        </label>
        <input type="number" id="rate" placeholder="Rate" />

        <label htmlFor="time">
            Time : 
        </label>
        <input type="number" id="time" placeholder="Time" />

    </div>
    </>
}
export default App;