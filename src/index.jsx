import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles/global-style.css';

const Render = () => <App />;

ReactDOM.render(<Render />, document.querySelector('#root'));
