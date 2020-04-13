import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import BodyItem from './BodyItem';
import Items from './Items';
import FooterItems from './FooterItems';

ReactDOM.render(<Items />, document.getElementById('body_items'));
ReactDOM.render(<FooterItems />, document.getElementById('footer_items'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
