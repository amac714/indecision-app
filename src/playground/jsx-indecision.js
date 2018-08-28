console.log('app,js is running!');

// if statemets
// ternary operator
// logical and operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// conditionally render new p tag - if options.length > 0 "Here are your options" "No Options"

// create app object title/subtitle
const app = {
  title: 'Indecision',
  subtitle: 'An app to help you decide',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderOptions();
  }
};

// create "Remove All" button above list
// onClick -> wipe the array -> rerender
const wipeArray = () => {
  app.options = [];
  renderOptions();
};

const onMakeDecision = () => {
  const rand = Math.floor(Math.random() * app.options.length);
  const option = app.options[rand];
  alert(option);
};

const appRoot = document.getElementById('app');

const renderOptions = () => {
  //JSX - javascript xml
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={wipeArray}>Remove All</button>
      <ol>
        {
          app.options.map((options) => {
            return <li key={Math.random()}>{options}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

// Create a render function that renders the new jsx
// Call it right away
// Call it after options array added to

renderOptions();