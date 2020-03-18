import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Dashboard from '@material-ui/icons/Dashboard';
import Login from '@material-ui/icons/VpnKey';
import Search from '@material-ui/icons/Search';
import Screen from '@material-ui/icons/ScreenShare';
import Menu from "../../common/menu";
import Header from "../../common/header";
import '../cssfiles/sidebar.css';

const routes1 = [
    {
        path: "/screen1",
        title:'Screen1',
        icon: <Screen/>
    },
    {
        path: "/screen2",
        title:'Screen2',
        icon: <Screen/>
    },
];

const routes2 = [
    {
        path: "/",
        title:'Dashboard',
        icon: <Dashboard/>
    },
    {
        path: "/login",
        title:'Login',
        icon: <Login/>
    }, {
        path: "/registration",
        title:'Registration',
        icon: <Login/>
    }, {
        path: "/search",
        title:'Search',
        icon: <Search/>
    },
];

function temporaryDrawer () {

    const classes = useStyles;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state,setState] = useState({
        top:false,
        right: false,
        bottom: false,
        left: false
    })

    const toggleDrawer = (side, open) => event => {
        if(event.type === 'keydown' && (event.key === 'tab' || event.key === 'shift')){
            return;
        }
        setState({...state, [side] : open})
    }

    const sideList = side => {
        return(
            <div className={classes.list}
                 onClick={toggleDrawer(side,false)}
                 onKeyDown={toggleDrawer(side,false)}
            >
                <List>
                    {routes2.map((text, index) => (
                        <ListItem button key={text.title} component={Link} to={text.path} >
                            <ListItemIcon>
                                {text.icon}
                            </ListItemIcon>
                            <ListItemText primary={text.title}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }

    const fullList = side => {
        return(
            <div className={classes.fullList}
                 onClick={toggleDrawer(side,false)}
                 onKeyDown={toggleDrawer(side,false)}
            >
                <List>
                    {routes2.map((text, index) => (
                        <ListItem button key={text.title} component={Link} to={text.path} >
                            <ListItemIcon>
                                {text.icon}
                            </ListItemIcon>
                            <ListItemText primary={text.title}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {routes1.map((text, index) => (
                        <ListItem button key={text.title} component={Link} to={text.path} >
                            <ListItemIcon>
                                {text.icon}
                            </ListItemIcon>
                            <ListItemText primary={text.title}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }

    return(
        <div className={'Sidebar'}>
            {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
            <Menu history={useHistory()}/>
            <Header
                title={'Sidebar'}
            />
            <div>
                <Button onClick={toggleDrawer('left',true)}>Open Left</Button>
                <Button onClick={toggleDrawer('right',true)}>Open Right</Button>
                <Button onClick={toggleDrawer('top',true)}>Open Top</Button>
                <Button onClick={toggleDrawer('bottom',true)}>Open Bottom</Button>
                <Drawer open={state.left} onClose={toggleDrawer('left',false)}>
                    {fullList('left')}
                </Drawer>
                <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
                    {fullList('top')}
                </Drawer>
                <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                    {fullList('bottom')}
                </Drawer>
                <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                    {sideList('right')}
                </Drawer>
            </div>
        </div>
    )
}
const useStyles = makeStyles({
    list:{
        width:300
    },
    fullList:{
        width:'auto'
    }
})
export default temporaryDrawer
