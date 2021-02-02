console.log('App.js is running')

const app = {
    title: 'Indecision Application',
    subtitle: 'Let your app decide!',
    options: []
}

// event handler
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}
const onRemoveAll = () => {
    app.options = [];
    render();
}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    console.log(app.options[randomNum]);
}

const appRoot = document.getElementById('content');

// render DOM
const render = () => {
    // JSX
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are the options' : 'No options.'}</p>
            <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    // Param: JSX to render, DOM element (where to render it)
    ReactDOM.render(template, appRoot);
}

render();