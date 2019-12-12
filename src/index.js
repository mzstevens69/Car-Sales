import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//////////////////////////////
import 'bulma/css/bulma.css';
import './styles.scss';
//////////////////////////////
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { carReducer, initialState } from './components/reducers/CarReducer'

//passing reducer and initialState(retruning initialState)
const store = createStore(carReducer, initialState);
//store methods
//store.dispatch({ type: 'ADD_FEATURE' })




const rootElement = 
document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
rootElement
);
