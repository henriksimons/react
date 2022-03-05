import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/


class MyComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
        <h1>Hello! My name is {this.props.name} and I'm {this.props.age} years old.</h1>
        <h1>Right now the time is: {this.state.date.toLocaleTimeString()}</h1>
      </div>
      
    )
  }
}

export default MyComponent;
