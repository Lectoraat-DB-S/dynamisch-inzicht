import React from 'react';
import {createRoot} from 'react-dom/client'
import './style/index.css';
import List from './components/List';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
      <List />
  </React.StrictMode>,
);
