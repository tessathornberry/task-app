import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {DragDropContext} from 'react-beautiful-dnd';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DragDropContext>
      <App />
      </DragDropContext>
  </React.StrictMode>
);

