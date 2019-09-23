const appRoot = document.getElementById('app');

let visibility = false;

const toggleVisibility = () =>{
    visibility = !visibility;
    renderTemplate();
};

const renderTemplate = () =>{
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? "Hide Details" : "Show Details"}
            </button>
            {                
            visibility && (
            <div>
            <p>Some Text here!</p>
            </div>
            )
        }       
        </div>
    )

    ReactDOM.render(template,appRoot);

}



renderTemplate();