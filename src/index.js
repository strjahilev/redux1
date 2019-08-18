// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import App from './App'
import { Provider } from 'react-redux'

// создание store для приложения
const add = document.querySelectorAll('.ADD')[0];
const button = document.querySelectorAll('.buttonadd')[0];
const list = document.querySelectorAll('.list')[0];
const start = [
    'start1', 'start2'
];
function f(state=start, action) {
    if (action.type === 'ADD'){
        return [
            ...state, action.payload
        ]
    }
    if (action.type === 'MINUS'){
        return [
            ...state, action.payload
        ]
    }
    // console.log (action);
    return state;
}
const store = createStore(f);
//subscribe реагирут на изменение store
// store.subscribe(()=>{
//     list.innerHTML = '';
//     add.innerHTML = '';
//     store.getState().forEach(add => {
//         const li = document.createElement('li');
//         li.textContent = add;
//         list.appendChild(li);
//     })
// } );
// button.addEventListener('click', () => {
//     store.dispatch({type: 'ADD', payload: add.value});
// });
/*  store пробросится в каждый компонент, а метод mapStateToProps преобразует state в props  */
ReactDOM.render(
    <Provider store={store}>

    <App />
    </Provider>, document.getElementById('root'));