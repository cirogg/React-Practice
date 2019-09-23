"use strict";

var appRoot = document.getElementById('app');

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    renderTemplate();
};

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleVisibility },
            visibility ? "Hide Details" : "Show Details"
        ),
        visibility && React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "Some Text here!"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderTemplate();
