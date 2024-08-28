import './styles/global-style.css';

import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';

import App from './App';

ReactGA.initialize('G-YM8FR742SY');

const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(<App />);
