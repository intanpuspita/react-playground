'use strict';

console.log('App.js is running');

var app = {
    title: 'Indecision Application',
    subtitle: 'Let your app decide!',
    options: []

    // event handler
};var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};
var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    console.log(app.options[randomNum]);
};

var appRoot = document.getElementById('content');

// render DOM
var render = function render() {
    // JSX
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are the options' : 'No options.'
        ),
        React.createElement(
            'button',
            { onClick: onMakeDecision, disabled: app.options.length === 0 },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
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

    // Param: JSX to render, DOM element (where to render it)
    ReactDOM.render(template, appRoot);
};

render();
