import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
})
