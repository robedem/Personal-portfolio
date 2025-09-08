import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import App from './App';
import './App.css';

const root = createRoot(document.getElementById('root')); // Create root
root.render(<App />); // Render app