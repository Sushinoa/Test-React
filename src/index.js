import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Users from './components/Users';
import addUser from './components/addUser';
import getUser from './components/getUser';
import getPageUsers from './components/getPageUsers';
import AllUsers from './components/AllUsers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducer from './reducers/index';
import post from  './middleware/post';
import api from  './middleware/api';
import oneUser from  './middleware/oneUser'
import pageUsers from  './middleware/pageUsers'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk,post,api,oneUser,pageUsers)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/users/" component={Users}/>
                <Route exact path="/users" component={AllUsers}/>
                <Route exact path="/users/:id" component={getUser}/>
                <Route  path="/page" component={getPageUsers}/>
                <Route path="/add_user" component={addUser}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
