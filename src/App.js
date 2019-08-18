import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
 class App extends React.Component{
  render() {
    return (
        <div className="App">
          <input type="text" className="ADD"/>
          <button className="buttonadd">BUTTON</button>
          <ul>
            {this.props.testStore.map((element, index) =>
                <li key={index}>{element}</li>
            )}
          </ul>
        </div>
    );
  }
}

export default connect(
    state => ({
      testStore: state
    }),
    dispatch => ({})
)(App);
