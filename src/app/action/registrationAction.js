import { SET_USERS} from './types';

export const setUser = (registration) => {
    console.log(registration)
    return (dispatch, getState) => {
        return fetch('http://localhost:4001/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(registration)
        })
            .then(response => response.json())
            .then(res => {
                return dispatch({
                    type: SET_USERS,
                    payload: res,
                });
            })
            .catch(e => {
                alert(e);
            });
    };
};




