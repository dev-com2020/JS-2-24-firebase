import React from 'react';
import './index.css';
import { Bookshelf } from './components/bookshelf';
import ReactDOM from 'react-dom';

ReactDOM.render(
        <React.StrictMode>
            <Bookshelf />
        </React.StrictMode>,
        document.getElementById('root')

);
