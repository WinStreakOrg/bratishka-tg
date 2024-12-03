import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>,
);



