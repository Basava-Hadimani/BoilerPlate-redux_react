import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Title from './title.tsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from  '../../reducer/allReducers.js';
import App from './App.js'


ReactDOM.render(<Provider store={createStore(allReducers)}>
<App />
</Provider>
, document.getElementById('form'));
