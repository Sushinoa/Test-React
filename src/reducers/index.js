/**
 * Created by Oksana Sushinskaya on 5/23/2017.
 */
import { combineReducers } from 'redux';

import sumNumber from './numbers';
import getUsers from './users';
import postUser from './create';
import getOneUser from './oneUser';
import getPage from './getPage';

export default combineReducers({
    sumNumber,
    getUsers,
    postUser,
    getOneUser,
    getPage
})