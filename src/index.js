import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function TimeStopper() {

  const [stopTime, setStopTime] = useState("");

    return (
      <div>
        <MyButton onClick={() => setStopTime(new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString())} />
        <MyTime stopTime={stopTime} />
      </div>
    );

}

function MyButton(props) {
  return (
    <div>
      <button className='button' onClick={props.onClick}>Click here to stop time</button>
    </div>
  );
}

function MyTime(props) {
  return <div>
    <h1 className='response'>Time was stopped at: {props.stopTime}</h1>
  </div>;
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
