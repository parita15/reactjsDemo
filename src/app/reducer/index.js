import {combineReducers} from 'redux';

import User from './registrationReducer';
import Login from './loginReducer';

const appReducer = combineReducers({
    user: User,
    login: Login,
});

export default function rootReducer(state, action) {
    return appReducer(state, action);
}
