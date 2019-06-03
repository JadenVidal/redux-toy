import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import store from './store'
import App from './App';

const Element = (props) =>{
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<Element />, document.getElementById('root'));
