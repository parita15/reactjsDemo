import {SET_USERS} from '../action/types';

const INITIAL_STATE = {
    userData: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                userData: action.payload,
            };
        default:
            return state;
    }
};
