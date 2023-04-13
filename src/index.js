import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_25 from './App_25';

import { AppProvider_25 } from './Context_25';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_25>
      <App_25 />  
    </AppProvider_25>
  </React.StrictMode>
);
