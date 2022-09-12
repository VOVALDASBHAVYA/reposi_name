// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import reducer from './Reducer';
// import{createStore} from './redux';
// import { connect, Provider } from 'react-redux';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// let store=createStore(reducer);
// ReactDOM.render(
//   // <React.StrictMode>
//   <Provider store={store}>
//     <App />
//     </Provider>,
//     document.getElementById("root")
//   // </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./reducer"; //import reducer
import { createStore } from "redux"; //to create store
import { Provider } from "react-redux";//to access store in to your component

//create a redux store
let store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById("root")
);
reportWebVitals();
