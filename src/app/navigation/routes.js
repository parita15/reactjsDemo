import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from '../container/jsfiles/login';
import Registration from '../container/jsfiles/registration';
import Dashboard from '../container/jsfiles/dashboard';
import Screen1 from '../container/jsfiles/screen1';
import Screen2 from '../container/jsfiles/screen2';
import Search from '../container/jsfiles/search';
import SideBar from '../container/jsfiles/sidebar';

export default function routes(){
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/registration' component={Registration}/>
                    <Route path='/screen1' component={Screen1}/>
                    <Route path='/screen2' component={Screen2}/>
                    <Route path='/search' component={Search}/>
                    <Route path='/sidebar' component={SideBar}/>
                </Switch>
            </div>
        </Router>
    )
}
