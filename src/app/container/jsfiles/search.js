import React, {Component} from 'react';
import {FormGroup,
    Form,
    Col,
    Label,
    Input,
    Button} from 'reactstrap';
import Menu from "../../common/menu";
import '../cssfiles/registration.css'
import Header from "../../common/header";

export default class SearchBasic extends Component{

    constructor(props) {
        super(props);
        this.state={
            search:''
        }
    }

    onTextChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render(){
        return(
            <div className={"Demo"}>
                <Menu history={this.props.history}/>
                <Header
                    title={"Search"}
                />
                <Form className={"Form"}>
                    <Col>
                        <FormGroup row>
                            <Label for={"Search"} sm={1}>Search</Label>
                            <Col sm={10}>
                                <Input type={"text"} name={"search"}
                                       placeholder={"Enter search value"}
                                       onChange={(e) => this.onTextChange(e)}
                                />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <Button color={"success"}>Search</Button>{''}
                            </Col>
                            <Col sm={1}>
                                <Button color={"success"}>Cancel</Button>{''}
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </div>
        )
    }
}
