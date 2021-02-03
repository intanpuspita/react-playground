"use strict";

var app = {
    title: "Visibility Toggle",
    detail: "Hey, these are some details that you want to see!"

    // event handler
};var showDetail = false;
var showHideDetails = function showHideDetails() {
    showDetail = !showDetail;
    render();
};

var appRoot = document.getElementById('content');

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "button",
            { onClick: showHideDetails },
            showDetail ? 'Hide details' : 'Show details'
        ),
        showDetail && React.createElement(
            "p",
            null,
            app.detail
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
