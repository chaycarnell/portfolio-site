import './styles/global-style.css';

import { GoogleAnalytics } from '@config/ga';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';

import App from './App';

ReactGA.initialize(GoogleAnalytics.GA_M_ID);

const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(<App />);
