import React from 'react';
import '../cssfiles/registration.css';
import {FormGroup,
    Form,
    FormFeedback,
    Col,
    Label,
    Input,
    Button} from 'reactstrap';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import Menu from '../../common/menu';
import Header from "../../common/header";
import {connect} from "react-redux";
import {setLogin} from "../../action/loginAction";

class LoginBasic extends React.Component{
    constructor() {
        super();
        this.state = {
            emailid: '',
            password: '',
            error: [],
            flag: false
        }
    }

    onTextChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    validation = (e) => {
        let err = {...this.state.error};
        var stateName = e.target.name
        console.log(stateName)
        if (e.target.value.trim().length === 0) {

            if (stateName === "emailid")
                err[stateName] = "please enter the emailid";
            if (stateName === "password")
                err[stateName] = "please enter the password";
        }
        else
            err[stateName] = ""
        if (stateName === "password") {
            if (this.state.password !== "") {
                if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/.test(this.state.password))
                    err[stateName] = "password length must be 8 to 12 and have capital,small alphabet and digit";
            }

        }
        this.setState({
            error: err
        })

    }

    onSubmit = (e) => {
        debugger
        const {emailid,password} = this.state;
        let login = {
            emailid: emailid,
            password: password,
        };
        let err={...this.state.error};
        if(this.state.emailid === ""){
            err['emailid']="please enter the emailid";
        }
        else
            err['emailid']="";

        if(this.state.password === ""){
            err['password']="please enter the password";
        }
        else
            err['password']="";
        this.setState({
            error:err
        });
        if(this.state.emailid === '' || this.state.password === '' ){
        }
        else{
            debugger
            this.props.setLogin(login).then(()=>{
                debugger
                this.props.history.push('/')}
        ).catch(()=>{
            debugger
            alert("aksjgfkdaj")})
        }
    }

    render(){
        return(
            <div className={"Demo"}>
                <Menu history={this.props.history}/>
                <Header
                    title={'Login Form'}
                />
                <Form className={"Form"}>
                    <Col>
                        <FormGroup row>
                            <Label for={"Email Id"} sm={1}>Email Id</Label>
                            <Col sm={10}>
                                <Input invalid={this.state.error.emailid ? true : false}
                                       valid={(!this.state.error.emailid && this.state.emailid!=="")?true:false}
                                        type={"email"} name={"emailid"}
                                       placeholder={"Enter your emial id"}
                                       onBlur={(e) => this.validation(e)}
                                        onChange={(e) => this.onTextChange(e)}
                                />
                                {this.state.error.emailid &&
                                <FormFeedback>{this.state.error.emailid}</FormFeedback>
                                }
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for={"Password"} sm={1}>Password</Label>
                            <Col sm={10}>
                                <Input invalid={this.state.error.password ? true : false}
                                       valid={(!this.state.error.password && this.state.password!=="")?true:false}
                                        type={"password"} name={"password"}
                                       onBlur={(e) => this.validation(e)}
                                       placeholder={"Enter your password"}
                                        onChange={(e) => this.onTextChange(e)}
                                />
                                {this.state.error.password &&
                                <FormFeedback>{this.state.error.password}</FormFeedback>
                                }
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <Button color={"success"}
                                        onClick={(e) => this.onSubmit(e)}>Submit</Button>{''}
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

function routes(){
    return(
        <Router>
            <div>
                <Switch>

                </Switch>
            </div>
        </Router>
    )
}
const mapStateToProps = state => {
    const {loginData} = state.login;
    return {
        loginData,
    };
};

export default connect(
    mapStateToProps,
    {
        setLogin,
    },
)(LoginBasic);
