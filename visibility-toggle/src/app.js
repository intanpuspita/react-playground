const app = {
    title: "Visibility Toggle",
    detail: "Hey, these are some details that you want to see!"
}

// event handler
let showDetail = false;
const showHideDetails = () => {
    showDetail = !showDetail;
    render();
}

const appRoot = document.getElementById('content');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={showHideDetails}>{showDetail ? 'Hide details' : 'Show details'}</button>
            { showDetail && <p>{app.detail}</p> }
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();