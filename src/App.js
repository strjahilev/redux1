import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import {minus} from "./actions/actionminus";
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
     find(){
         this.props.onFind(this.serchInput.value);
         this.serchInput.value = '';
     }

  render() {
    return (
        <div className="App">
            <input type='text' ref={(input) => {this.serchInput = input} }/>
            <button onClick={this.find.bind(this)}>FIND</button>

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
      testStore: state.f1.filter(item => item.includes(state.filter))
    }),
    dispatch => ({
        onAddItem: (item) => {dispatch({type:'ADD1', payload: item})},
        onMinusItem: (item) =>{dispatch(minus(item))},
        onFind:(name) => {dispatch({type:'FIND', payload: name})}
        })
)(App);
