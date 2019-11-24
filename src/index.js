import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";
// import "./assets/css/style.css";

import Product from "./views/product.js"

ReactDOM.render(<Product />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
