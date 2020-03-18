import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import React from "react";

const Menu = ({...props}) => {
    function onscreen1(){
        props.history.push('/screen1')
    }
    function onscreen2(){
        props.history.push('/screen2')
    }
    function onsidebar(){
        props.history.push('/sidebar')
    }
    return (
        <Navbar color="light" light expand="md">
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/registration">Registration</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Dashboard</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Screen
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem onClick={onscreen1}>
                            Screen 1
                        </DropdownItem>
                        <DropdownItem onClick={onscreen2}>
                            Screen 2
                        </DropdownItem>
                        <DropdownItem onClick={onsidebar}>
                            Sidebar
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                    <NavLink href="/search">Search</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}
export default Menu
