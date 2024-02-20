import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from 'react-bootstrap';
// import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            {/* <Provider store={}> */}
            <App />
            {/* </Provider> */}
        </ThemeProvider>
    </React.StrictMode>
);