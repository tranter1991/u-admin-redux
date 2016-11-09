import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/NewApp';
import reducer from './reducers'
import thunk from 'redux-thunk';
import './styles/app.scss';

const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch({type:'ADD_TODO', text:"你妹的！！"});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
