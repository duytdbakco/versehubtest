import React from 'react';
import ReactDOM from 'react-dom/client';
import HorizontalSlideShow from './HorizontalSlideShow';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HorizontalSlideShow />
  </React.StrictMode>
);
