// JSX counter
let count = 0;
const addCount = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('content');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id="plusbtn" className="button" onClick={addCount}>+1</button>
            <button id="minusbtn" className="button" onClick={minusOne}>-1</button>
            <button id="resetbtn" className="button" onClick={reset}>Reset</button>
        </div>
    );

    // Param: JSX to render, DOM element (where to render it)
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();