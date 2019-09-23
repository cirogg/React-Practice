console.log("App.js is running!");

const app = {
    tittle: 'Indecision App',
    subtittle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) =>{
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderTemplate(); 
    }
//    console.log(option);
}

// JSX - Javascript XML

const removeAll = () =>{
    app.options = [];
    renderTemplate();
}

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const optionSelected = app.options[randomNum];
    alert(optionSelected);
    console.log(randomNum);
};

const appRoot = document.getElementById('app');

// const numbers = [10,100,1000];

const renderTemplate = () =>{
    const template = (
        <div>
            <h1>{app.tittle}</h1>
            {app.subtittle && <p>{app.subtittle}</p>}        
            <p>{app.options && app.options.length > 0 ? "Here are your options" : "No Options"}</p>            
            <button onClick={removeAll}>Remove All</button>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            {
                // numbers.map((number) => {
                //     return <p key={number}>Number: {number}</p>
                // })
            }   
            <ol>
                {
                    // app.options.map((option) => {
                    //     return <li key={option}>{option}</li>
                    // })
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>            
        </div>
        );
    ReactDOM.render(template,appRoot);
}

renderTemplate();
