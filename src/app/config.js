import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import AppReducer from '../app/reducer/index';
import AppNavigator from '../app/navigation/routes'
const store = createStore(AppReducer,applyMiddleware(thunk));

const App = () => {
    return (
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    );
};

export default App;
