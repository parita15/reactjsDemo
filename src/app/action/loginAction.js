import {SET_LOGIN} from './types';

export const setLogin = (login) => {
    debugger
    return (dispatch) => {
        return fetch('http://localhost:4001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(login)
        })
            .then(response => {
                debugger
                if(response.status === 400){
                    debugger
                    return Promise.reject(false)
                }else {
                    response.json()}
    })
            .then(res => {
                debugger
                return dispatch({
                    type: SET_LOGIN,
                    payload: res,
                });
return Promise.resolve(true)
            })
            .catch(e => {
                console.log(e);
                return Promise.reject(false)

            });
    };
};
