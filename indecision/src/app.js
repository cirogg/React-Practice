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

const appRoot = document.getElementById('app');


const renderTemplate = () =>{
    const template = (
        <div>
            <h1>{app.tittle}</h1>
            {app.subtittle && <p>{app.subtittle}</p>}        
            <p>{app.options && app.options.length > 0 ? "Here are your options" : "No Options"}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
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
