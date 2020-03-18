import {SET_LOGIN} from '../action/types';

const INITIAL_STATE = {
    loginData: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                loginData: action.payload,
            };
        default:
            return state;
    }
};
