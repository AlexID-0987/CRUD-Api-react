import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";

const defaulStore={
    name:[
        "Alex",
        "Jleg",
        "Gala"
    ],
    watch:[2,-4,6,7,-5]

}
const reduser=(state =defaulStore,action)=>{
    switch (action.type){
        case 'ADD':
            return {...state, name:state.name+action.payload}
        case 'RANDOM':
            return {...state, name:action.payload}
        case 'SUMPOZITIVE':
            return {...state, watch:action.payload}
        default:
            return state
    }
}
const store=createStore(reduser)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
