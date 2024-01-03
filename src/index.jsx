import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import App from './app';
import './styles/global-style.css';

ReactGA.initialize('G-YM8FR742SY');

const root = createRoot(document.querySelector('#root'));

root.render(<App />)
