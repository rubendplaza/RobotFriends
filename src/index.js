//This syntax works because react has webpack under the hood that does the bundling for us.
import React from 'react';
//Does the DOM manipulation for us
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots';

//I want the react dom package to use the function render and this render will render in the first parameter
ReactDOM.render(
                <CardList robots={ robots }/>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
