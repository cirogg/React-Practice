console.log("App.js is running!");


const app = {
    tittle: 'Indecision App',
    subtittle: 'Put your life in the hands of a computer',
    options: ['One','Two']
}

// JSX - Javascript XML
const template = (
    <div>
        <h1>{app.tittle}</h1>
        {app.subtittle && <p>{app.subtittle}</p>}        
        <p>{app.options && app.options.length > 0 ? "Here are your options" : "No Options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
    );

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



const appRoot = document.getElementById('app');



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