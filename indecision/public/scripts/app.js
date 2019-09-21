'use strict';

console.log("App.js is running!");

var app = {
    tittle: 'Indecision App',
    subtittle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']

    // JSX - Javascript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.tittle
    ),
    app.subtittle && React.createElement(
        'p',
        null,
        app.subtittle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? "Here are your options" : "No Options"
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    console.log("addOne", count);
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    console.log("minusOne", count);
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    console.log("reset", count);
    renderCounterApp();
};

//Challenge Make button "-1" setup minusOne function and register - log minusOne;
//Make reset button "reset" -  function setup reset function - log("reset");


var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var template2 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(template2, appRoot);
};

renderCounterApp();
//ReactDOM.render(template2,appRoot);
