'use strict';

console.log("App.js is running!");

var app = {
    tittle: 'Indecision App',
    subtittle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderTemplate();
    }
    //    console.log(option);
};

// JSX - Javascript XML

var removeAll = function removeAll() {
    app.options = [];
    renderTemplate();
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();
