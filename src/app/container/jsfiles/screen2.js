import React,{useState} from 'react';
import { Collapse, Button, CardBody, Card,Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import Menu from '../../common/menu';
import Header from "../../common/header";
import {useHistory} from "react-router-dom";

const Screen2Basic = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const togglepopover = () => setPopoverOpen(!popoverOpen);

    return (
        <div className = {"screen"}>
            <Menu history={useHistory()}/>
            <Header
                title={"Screen2"}
            />
            <div>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem',marginTop: '20px',marginLeft: '20px' }}>Toggle</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            Welcome to the reactjs first demo.This is the screen2 of the demo
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
           <div>
               <Button color="info" id={"popover"} type={"button"} style={{marginTop:'20px',marginLeft:'20px'}}>
                   Launch Popover
               </Button>
               <Popover placement="button" isOpen={popoverOpen} target="popover" toggle={togglepopover}>
                    <PopoverHeader>
                        Popover Title
                    </PopoverHeader>
                   <PopoverBody>
                       Welcome to the reactjs first demo.This is the screen2 of the demo
                   </PopoverBody>
               </Popover>
           </div>
        </div>
    );
}
export default Screen2Basic
