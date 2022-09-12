// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux/es/exports';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import PropTypes from 'prop-types'
function App(props) {
 const increment = () => { //increment action
    props.dispatch({
      type: "INCREMENT"
    });
  };
const reset = () =>{//reset
props.dispatch({
  type: "RESET"
})
}
  const decrement = () => { //Descrement action
    props.dispatch({
      type: "DECREMENT"
    });
  };
  return (
    <div className="App">
      <h1> Functional Component</h1>
      <center>
      <button onClick={increment} className="btn btn-primary">
       Increment
      </button><span style={{ padding: 5 }}></span>
      <button onClick={reset} className="btn btn-success mr-5">Reset</button><span style={{padding :"5px"}}></span>
       <button onClick={decrement} className="btn btn-danger">
      Decrement
      </button>
      <h2 className="mt-5 display-1">{props.count}</h2>
      </center>
{/* <Home /> */ }
    </div>
  );
}
const mapStateToProps = state => { //to access state mapState through access any component
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);

{/*
import React from "react";
import { connect } from "react-redux"; //Connect to store

class App extends React.Component {
  increment = () => { //increment action
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  decrement = () => { //Descrement action
    this.props.dispatch({
      type: "DECREMENT"
    });
  };
  //design view
  render() {
    return (
      <div className="App mt-5">
        <center>
          <button onClick={this.increment} className="btn btn-success mr-5">
            Increment
          </button><span style={{ padding: 5 }}></span>
          <button onClick={this.decrement} className="btn btn-danger">
            Decrement
          </button>
          <h2 className="mt-5 display-1">{this.props.count}</h2>
        </center>
        {/* <Home /> */}
     {/* </div>
    );
  }
}

const mapStateToProps = state => { //to access state mapState through access any component
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
*/}