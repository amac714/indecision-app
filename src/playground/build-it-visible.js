
// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false
    };

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  
  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visibility === true && <div><p>Hello World!</p></div>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));