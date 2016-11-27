import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './containers/NewApp';
import reducers from './reducers'



import Content1 from './components/Content1'
import Content2 from './components/Content2'


import './styles/app.scss'

console.debug(reducers.todos);

const reducer = combineReducers({
        ...reducers,
    routing: routerReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Content1} />
                    <Route path="about" component={Content2} />
                </Route>
            </Router>
        </div>
    </Provider>
), document.getElementById('root'))

