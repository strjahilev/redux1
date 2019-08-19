import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
 class App extends React.Component{
     additem(){

         console.log(this.Input.value) ;
         this.props.onAddItem(this.Input.value);
         this.Input.value = '';
     }
     minusitem(){
         this.props.onMinusItem(this.Input.value);
         this.Input.value = '';
     }
  render() {
    return (
        <div className="App">
            <h1> list</h1>
            <input type="text" ref={(input) => { this.Input = input; }} />
            <button onClick={this.additem.bind(this)}>BUTTON</button>
            <button onClick={this.minusitem.bind(this)}>MINUS</button>
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
    dispatch => ({
        onAddItem: (item) => {dispatch({type:'ADD', payload: item})},
        onMinusItem: (item) =>{dispatch({type: 'MINUS', payload: item})}

    })
)(App);
