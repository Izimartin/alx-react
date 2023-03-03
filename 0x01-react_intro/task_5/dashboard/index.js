
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App/App';
import Notifications from './src/Notifications/Notifications';

ReactDOM.render(
    <React.StrictMode>
        <Notifications />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);