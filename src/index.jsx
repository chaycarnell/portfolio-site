import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './app';
import './styles/global-style.css';

ReactGA.initialize('UA-69278053-1');

const Render = () => <App />;

ReactDOM.render(<Render />, document.querySelector('#root'));
