// stateless functional component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      options: []
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }
  
  // component lifecycle methods - available only in class based components
  componentDidMount() {
    try {
      const json = localStorage.getItem('options'); //localStorage returns a string
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch(e) {
      // DO nothing at all
    }

  }

  componentDidUpdate(prevProps, prevState) {
    // only save data if it changes
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }

  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  // handleDeleteOptions - empties out the options array
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  // handlePick - pass down to Action and set up onClick - bind here
  //  randomly pick an option and alert it
  handlePick() {
    const rand = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rand];
    alert(option);
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } 

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer.';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
         />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

// setting default props value
Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>
        Remove All
      </button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map(options => (
        <Option key={options} optionText={options} handleDeleteOption={props.handleDeleteOption} />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}>
        Remove
      </button>
    </div>
  );
};

// setup form with text input and submit button
// wire up onSubmit
// handleAddOption -> fetch value typed -> if value, then alert
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: undefined
    };
  }

  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim(); //trim spaces
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if(!error) {
      e.target.elements.option.value = '';
    }
  }
  
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age} </p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));