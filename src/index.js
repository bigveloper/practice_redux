import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';

const store = createStore(rootReducer); // create store
// console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// react-redux 라이브러리 사용 해야 한다. 설치한다.
// terminal% npm install react-redux

// 모든게 준비 되었으면 구현 하려 했던  counter 를 구현하러 가자!!
// src directory 에 components directory 를 생성 후 그 안에 counter.js를 만들어준다.
