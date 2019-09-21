let count = 0;
const addOne = () => {
    count++;
    console.log("addOne", count);
    renderCounterApp();
}

const minusOne = () => {
    count--;
    console.log("minusOne", count);
    renderCounterApp();
}

const reset = () => {
    count = 0;
    console.log("reset", count);
    renderCounterApp();
}



//Challenge Make button "-1" setup minusOne function and register - log minusOne;
//Make reset button "reset" -  function setup reset function - log("reset");







const renderCounterApp = () =>{
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template2, appRoot);
}

renderCounterApp();
//ReactDOM.render(template2,appRoot);