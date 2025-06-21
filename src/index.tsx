import { createRoot } from 'react-dom/client';
import * as React from 'react';

import App from './components/App';

const root = createRoot(document.querySelector('#app')!);
root.render(<App />);
