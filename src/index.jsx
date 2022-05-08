import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactGA from 'react-ga';
import App from './app';
import './styles/global-style.css';

ReactGA.initialize('UA-69278053-1');

const root = createRoot(document.querySelector('#root'));

root.render(<App />)
