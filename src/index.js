import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


class TimeStopper extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { stopTime: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() }
  }

  handleClick(e) {
    this.setState({
      stopTime: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() 
    }
    );
  }

  render() {
    const stopTime = this.state.stopTime;
    return (
      <div>
        <MyButton handleClick={this.handleClick} />
        <MyTime stopTime={stopTime} />
      </div>
    );
  }

}

class MyButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick(e);
    console.log('Click!')
  }


  render() {
    return (
      <div>
        <button className='button' onClick={this.handleClick}>Click here to stop time</button>
      </div>
    )
  }
}

class MyTime extends React.Component {
  render() {
    return (
      <div>
        <h1 class='response'>Time was stopped at: {this.props.stopTime}</h1>
      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <TimeStopper />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
