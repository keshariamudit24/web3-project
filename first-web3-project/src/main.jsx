// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import { TransactionProvider } from './context/TransactionContext';

//the following is older version of react

// ReactDOM.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

//this is how we write in new version  

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <TransactionProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </TransactionProvider>
);

