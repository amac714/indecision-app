import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  
  
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     options: [],
  //   };

  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.handlePick = this.handlePick.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
  // }

  //using class properties syntax
  state = {
    options: [],
    selectedOption: undefined
  };

  // handleDeleteOptions - empties out the options array
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option),
    }));
  };
  // handlePick - pass down to Action and set up onClick - bind here
  //  randomly pick an option and alert it
  handlePick = () => {
    const rand = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rand];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleSelectedOption = () => {
    this.setState(() =>({
      selectedOption: undefined
    }));
  };  

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    //concat new option to end of array
    this.setState(prevState => ({
      options: prevState.options.concat(option),
    }));
  };

  // component lifecycle methods - available only in class based components
  componentDidMount() {
    try {
      const json = localStorage.getItem('options'); //localStorage returns a string
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // DO nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // only save data if it changes
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer.';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleSelectedOption={this.handleSelectedOption}
         />
      </div>
    );
  }
}