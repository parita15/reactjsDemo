import React, {Component} from 'react';
import {
    FormGroup,
    Form,
    Col,
    Label,
    Input,
    Button,
    FormFeedback,
    Badge,
    Table
} from 'reactstrap';
import '../cssfiles/registration.css';
import Menu from '../../common/menu';
import Header from "../../common/header";
import {connect} from 'react-redux';
import {setUser} from '../../action/registrationAction';

class RegistrationBasic extends Component{
    constructor() {
        super();
        this.state={
            name: '',
            address: '',
            emailid: '',
            password: '',
            error: []
        }
    }

    validation = (e) => {
        let err = {...this.state.error};
        var stateName = e.target.name
        console.log(stateName)
        if (e.target.value.trim().length === 0) {
            if (stateName === "name")
                err[stateName] = "please enter the name";
            if (stateName === "address")
                err[stateName] = "please enter the address";
            if (stateName === "emailid")
                err[stateName] = "please enter the emailid";
            if (stateName === "password")
                err[stateName] = "please enter the password";
        }
        else
            err[stateName] = "";
        this.setState({
            error: err
        })
    };

    onSubmit = (e) => {
        const { name,address,emailid,password } = this.state
        let registration = {
            name: name,
            address: address,
            emailid: emailid,
            password: password,
        };
        let err={...this.state.error};
        if(this.state.name === "")
            err['name']="please enter the name";
        else
            err['name']="";

        if(this.state.address === "")
            err['address']="please enter the address";
        else
            err['address']="";

        if(this.state.emailid === "")
            err['emailid']="please enter the emailid";
        else
            err['emailid']="";

        if(this.state.password === "")
            err['password']="please enter the password";
        else
            err['password']="";

        this.setState({
            error:err
        });
        if(this.state.name === '' || this.state.address === '' || this.state.emailid === '' || this.state.password === '' ){
        }
        else{

            this.props.setUser(registration)
            this.props.history.push('/login')
        }
    }

    onTextChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };


    render() {
        return(
            <div className={"Demo"}>
                <Menu history={this.props.history}/>
                <Header
                    title={"Registration Form"}
                />
                <div>
                    <Form className={"Form"}>
                        <Col>
                            <FormGroup row>
                                <Label for={"Name"} sm={1}>Name</Label>
                                <Col sm={10}>
                                    <Input invalid={this.state.error.name ? true : false}
                                           valid={(!this.state.error.name && this.state.name!=="")?true:false}
                                            type={"text"} name={"name"}
                                            placeholder={"Enter your name"}
                                            onChange={(e) => this.onTextChange(e)}
                                            onBlur={(e) => this.validation(e)}
                                    />
                                    {this.state.error.name &&
                                    <FormFeedback>{this.state.error.name}</FormFeedback>
                                    }
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for={"Address"} sm={1}>Address</Label>
                                <Col sm={10}>
                                    <Input invalid={this.state.error.address ? true : false}
                                           valid={(!this.state.error.address && this.state.address!=="")?true:false}
                                            type={"text"} name={"address"}
                                           placeholder={"Enter your address"}
                                           onChange={(e) => this.onTextChange(e)}
                                           onBlur={(e) => this.validation(e)}
                                    />
                                    {this.state.error.address &&
                                    <FormFeedback>{this.state.error.address}</FormFeedback>
                                    }
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for={"Email Id"} sm={1}>Email Id</Label>
                                <Col sm={10}>
                                    <Input invalid={this.state.error.emailid ? true : false}
                                           valid={(!this.state.error.emailid && this.state.emailid!=="")?true:false}
                                            type={"email"} name={"emailid"}
                                           placeholder={"Enter your emial id"}
                                           onChange={(e) => this.onTextChange(e)}
                                           onBlur={(e) => this.validation(e)}
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
                                           placeholder={"Enter your password"}
                                           onChange={(e) => this.onTextChange(e)}
                                           onBlur={(e) => this.validation(e)}
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
                                    <Button color={"primary"}
                                            onClick={this.onSubmit} outline >Save
                                            <Badge style={{marginLeft:'10px'}}>
                                                <img src={"data:image/png;base64,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"}
                                                     style={{height:'20px',width:'20px'}}
                                                />
                                            </Badge>
                                    </Button>{''}
                                </Col>
                                <Col sm={2}>
                                    <Button color={"danger"} outline>Cancel
                                        <Badge style={{marginLeft:'10px'}}>
                                            <img src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEBUTExAVFRUXFRUSGBcSEA8PEhYSFREXFhUYGBUYHSggGBslGxUVITEhJSkrLi4uFx8zODUtNygtLisBCgoKDg0OGhAQGi8lHyUvLS03LS0tLS0tLS0tLS0tLSsrLS0tLS0tKy0tLS0tLS0tLS0rLS0tLS0tLTctLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQcEBQYCA//EAEAQAAECBAQFAQQIAwYHAAAAAAEAAgMRITEEQWFxBQYSUbEiMlKR8QcTQmJygaHBgtHwFSODwtLhFkNTc5Kys//EABsBAQACAwEBAAAAAAAAAAAAAAAEBQEDBgIH/8QAMxEAAgEDAgQEBAYCAwEAAAAAAAECAxExBGEFIUFREnGx0ZGhwfAUIjJSgeETQiMzkhX/2gAMAwEAAhEDEQA/ALvQCfZACcggBOWaAEy3QAmSATldAJ5lAAcygAKAAz2QCc9kAn2QAnIIATkEAJ+KAEyQCcroBPMoADmUABQAGeyAAz2QCfZACcggBOQQAn4oCZoAgIPZARoPkgFqBALboBbdALVN0A1KAalAL7IBfbygF9kA0CAaD5IBagQC26AW1KAWqboBqUA1KAXqbIBfbygF9kAvQIBoEAtQIBbdALalASBK90BKAgnIICLUCAW3QC26AWqboBqfkgGpQC+yAX28oBfZANAgGg+SAWoEAtugFtSgFqm6AalANSgF6myAX28oBfZAL0CAaD5IBagQC26AW1KAWqboCQMygJQEE9roDHxuNhQWF8R4aO7jn+50C8ykoq7NlKjOrLwU1dnG8Q+kJoJEGCXfeiHpB2aKy3IUSWsX+qL6jwB2vVnbZe5q/wDj7GTn0wdvq4n+tavxdTYmf/C0yXNy+K9jZYD6Qq/38CnvQnTl/A7+a2R1n7kRa3AOV6c/4fuvY7Hh3EIMdn1kN4c3S4PZwNQdCpkJxmrxZQ19PUoS8NRWZlX2Xo0i+3lAL7IBoEA0HyQC1AgFt0AtugFqm6AalANSgF6myAX28oBfZAL0CAaBAYvEeIwcOzqiPDRrUk6AVcdAvM5xgryZuoaepXl4Kau/vJxuO+kORlAgfxRXVP8AC3+ahy1n7UX1HgHL/ln/AAvd+xrhz9jAfZgn/Dieeta/xdTYlPgWmtmXxXsbXh30hNn/AH8Ej70M9QH8JrLYlbYaxf7Ih1+ANK9Kd9n7nY4HGQorBEhvD2mxaZy0lkdFLjJSV0UNWjOlLwVFZmQBmV6NZM0B8MbimQobojzJrQXHYBYlJRV2e6VOVSahHL5FP8d4zExMUveaWYydGt/n3KqKtV1HdndaPRw0tPwxz1fd+3Y1q1kvAQbsIN2ZXDeIRYDxEhPLT8WuHZwzC9wm4O8TTX09OvHw1FdffNFlcuc2wsTJj5Q4vuk+l5+4f8t91Y0tRGfJ8mclruFVNPececO/VefudHfZSCqGgQDQfJALUCAW3QC26AWqboBqUA1KAXqbIBfbygF9kA0CAaD5IDneZObYWGnDZKJG90H0s1ee+l9lHraiMOS5stdDwqpqLSlyj36vy9ytOI8Qix3l8V5c4/ADs0ZBV05ym7yOtoaenQh4Kat99TFXg3YCDAQbs2XAeMxMLFERtW/bZOjm/wA+xWylVdN3RE1mjhqqfhnno+331LgweJbFY2I0zY4BzdiM9VbxkpK6OFqU5U5uEsoyJrJ4OQ+kvEluFawf8yIAfwtBdL49PwUTVytBLuXfAqaddzfRevL0uVoq463AQbsIN2EGQgyEMZOz5a52cyULEEuZYRLvb+IfaGt91Mo6prlP4lDr+DRnedDk+3R+Xb08iwYEZr2h0Nwc0iYc0gtloc1PTTV0cxOEoScZKzR7tQLJ5Ft0AtugFqm6AalANSgF6myAX28oBfZANAgPEeO1jSXODWtEy5xAa0akrDaSuz1CEpyUYq7ZX3MvOznzhYabWWMSoe78PujW+ygVtU3yhjudPoODRhadfm+3Reff08zjFDL/AAEGAgwEG7CDdhAWV9GuJLsM5htDiGWzgHeS74qx0jvBrsclx2mlXU11Xpy9LHYKWUhyP0lYUuwrXj7EQE/hcC3yWqLq43hfsXfAqqjXcX1Xpz9ys1WnW7sIN2EGQgyEGQgCDZG34BzDGwrvQephM3Q3E9J1Huu1+M1tpVpU3ywQdboKWqjaXKXfr/aLP4JxuBiWdUJ3q+0x1HtOo7aiis6dWNRXRyGr0dXTS8M15PozY21K2EQWqboBqUA1KAXqbIBfbygF9kAvQIDXcb43BwrJvdU+y1tXu2H7mi11KsaauyVpNHV1MvDBeb6L77FX8f5gjYp3qPSwGbYbSekan3nan8pKsq1pVHzwdho9BS0qtHnLq/vCNStROwEGAgwEG7CDdhAEGSy/o2wpbhXPNnxCRq1oDfIcrLSRtC/c5LjtVS1Civ8AVevP0sdepRSHwxmGZEY5jxNrmlpGhHlYklJWZ7p1JU5qccrmVBzBwOLhYnS8EsPsPlRw17O7hVNWk6bszuNFrYaqHiWVldv6NWtRNyEGQgyEAQbIINkEGD7YPFRITw+G8teLFt9uxGhovUZOLujXVpQqRcJq6ZZPLHN8OPJkWTI1hkx/4ex+6fymrGjqVPk8nJ8Q4TPT3nT5x+a89t/idRqVJKcalAL1NkAvt5QC+yAXoEBzHM/N8PDzhQZPi2ObIf4u7vu/GSjVtSoclkuOH8JnXtOpyj835e5WuLxUSK8viPLnm5P9UGgVdKTk7s6ynShSioU1ZHxXk2YCDAQYCDdhBuwgCDJtOXuBxMXF6WzDAfW+VGjtq7sP2W2lSdR2RC1uthpoXeei7/0W/hIDYbGw2CTGANGwElbRSirI4epUlUm5yy+Z9pLJ4IIzKA+GLwsOKwsiMDmH7LhMb6LEoqSszZTqzpyUoOzK25q5TdAnEhBz4Nz9pzN8y3XLNV1bTuHOODq+H8VjqLQq8pfJ/wB7fA5ec1FLnIQBBsgg2QQYCDAQYCDdnacr86OZKHiSXMs2Jdzfx+8Nb7qZR1Nvyz+JQcQ4Op3qUOT/AG9H5dntgsGE8PAcCC0iYIIIIyM1YJ3wcvKLi7NWZ6vt5QwL7IDzFitAJJDWgTLiQAAL1WG7c2ZjFydkrsr7mjnQvnCwxLWWMSoc78HujW+ygVtTflD4nT8P4OoWnX5vt0Xn3e2Di1DOg2QQYCDAQYCDdhBuwgPL4gF/90GTreWuSoseUTEThQrhlor9/cH67XUulpXLnLBR6/jMKd4Ueb79F7+hY2EwsOGwQ4TAxjcmiQ/3OqsIxUVZHL1Ks6snKbuz7zyCyayZICCEBF9vKAX2QHGczcjsikxMLKHEqXMtCedPcdqKeVEq6ZS5xyXmh4zOnaFbnHv1Xuvn6FeYhj4bzDisMN7btcJfMa2UCUXF2Z1NOpCpFSpu67kLye9kEGAgwEGAg3YQbsIMm85b5li4U9PtwSZlhNu5YcjpY/qt9Ku6fkV2u4dT1aviXf32+foWjwziULEQw+E6bc8nA+6RkVZQnGaujjq+nqUJ+CorP18iOKcShQIZfEf0tFNSfdaMyk5xgrszp9PUrz8FNXfp5lX8ycyxcUen2IQNGA37F5zOlh+qrateVTyOw0PDqelV1zl39vu5o1oLHZBBgIMBBgIN2EG7Ic4CpQHvAYWNiIghwWFzj8AO7jZoXuEHJ2Rpr16dGHjqOy9fIszlbkuFh5RIkosa/UR6GH7gP/sa9pKxpadQ5vmzlNfxapqPyQ/LD5vz9jqTWgUgqBoEBOgQEoCCJ7ICL7IBoEA0HyQGs49wHD4pnREb6h7L2yD2TzB/Y0K11KUZqzJek1tXTS8VN+a6MqrmDl7EYJ3qHXDJ9MRoPSdHD7DtPhNV1WjKD547nX6LiFLUx/Lyl2ef7RrYcUHdaSdg9rAwEG7CDdhBkIMhDGTN4TxSLh4nXCdI2Iu1w7OGf7L3Cbg7o0anTU9RDwTXL5ryHFuKRcRE64jpmwAo1g7NGX7pOcpu8hptNT08PBTXu/Mwl4JGyCDAQYCDAQbsIN2fGJH7LNhk3fLHKUfGEPdOHB98irtIYN97b2UilQc9kVmu4nT035Vzl29/bJavCOEwcPD+rgsDW5m7nnu52ZVhCEYKyOR1GpqaifjqO/08jNvQL2aBoEA0CAkUpmgPSA8muyAjQIBoPkgFqBALboDxGgtc0te0ODhIhwBBHYg5LDSfJnqMnFqUXZorjmvkJzJxcKC5tzCu9v8A2z9ofdv2nZQq2mtzh8DptBxlStDUcn+7p/PbzwcSyMR7W2oUKxf7mQ1wNVgzuyUGQgyEMZCGQg2QQbIIMBBgIMBBuzy+IBf4LI3Zj9TnkAAkkyDWgkkmwAFyspdjDaSu8Fg8p8g2i4sTzEG4/wAQi/4RTvOym0dN1n8Dm+Icavenp/8A17e537WiUgJNFKUEhkNFNOdbvzZN6BDA0CAaBALUF0BIpugJQEHsgI0HyQC1AgFt0AtqUAtU3QDUoDl+aeTYWKnEZKFGv1S9L/xgZ/eFd7KPVoKfNcmWug4rU09oz5w7dvL2Ksx+BjYeIYcVhY4ZGxHcGzhqq+UXF2Z11GtTrw8cHdfeSIcYG9P3XixtyfVYMZCGQg2QQbIIMBBgIMBBuz4RI/ZZsN2fXhPC4+JifVwmdTrkkya0e892Q/XtNe4QcnaJo1Gop0IeOo7L5vyLY5W5Tg4UdXtxSKxCPiGD7I/U59lY0qEafPqchr+JVNU/DiPb37+h0N9vK3laL0CAaBANAgFqC6AW1KAkCV7oCUBBOQQEWoEAtugFt0AtU3QDUoBqUAvU2QGBxng0DFw+iKyYFWuFHtPdpy8HNeJ04zVmSNNqqunn4qb/AI6PzKl5l5Xj4R0z64RMmxGimgcPsn9Dl2VdVoyp+R2Gi4jS1SsuUuq9u6NRDjEUNv1WixYGQDOywNkSg2QQYCDAQYCDdniMwkXWRuzbcr8pRsWeozhwQavIqZXDAbnWw1st9Ki5+RW67iVPTK2Zdvf7v6lscJ4XBgQxDhMDWCvdzj7zjclWUIKCsjkNRqKlefjqO7+8GZfbyvRoF6BANAgGgQC1BdALalALVN0BIGZQEoCCcggItugFt0AtU3QDUoBqUAvU2QC+3lAY/EMdDhQzEiODWC5OZ7AZnReZTUVdm2jRnWmoQV2yrOZuZImLd01ZBB9LJ31f3Olh+qrK1d1HsdjoOHQ0qvmXV/RffM5qLB7LTcstkfNjyLLI2RlQ4gO6wMHtYGAgwEG7CDdhAbzlrmSJhXSM3wSfUydvvN7HSx/Vb6Nd03sVuv4dDVq+JdH9Ht6Fp4HGw48MRIbg5hzHfMEZHRWcZKSujjq1GdGbhNWaMi9AvRqGgQDQIBagugFtSgFqm6AalASBmUBM0BBPxQEW3QC1TdANSgGpQC9TZAL7eUBg8Y4tCw8MviOkLAD2nu91oXipUjBXZJ0ulqamfgpr2XmVTx7jkXFROp9Gj2GA+lo/c9yqurVlUd2dno9FT00PDDPV9/62NYtRM2QQbI+UWDO11m4wY1QdVkYMmFGne6xYYPqsDdhBuwgCDIQxk2fAeORcLE6mGbT7bCZNcP2Oq20qrpu6Ims0VPVQ8MsrD7f1sWvwjisLEww+E6lnA+0w9nDurSnUjNXRxep0tTTz8E17PyM3QL2RxagugFtSgFqm6AalANSgJFaoCZoCCZICLVN0A1KAalAL1NkAvt5QGs4/xyFhofU8zJo1gPqef2b3K1VasaauyZo9FU1U/DHHV9vvsVRxfikXExDEiOmbACjWt91oyVXObm7s7TTaanp4f46a/nq/Mwl4JGyCDZBBgIMHiJDB3WRgxCJLI3Z94MbusWG7PusAIMhDGQhkINkZvCOKxcNEESE6RsQfZc3s4f1Je6dRwd0R9Tpqeoh/jmvdblr8A45CxMPqh0cPbYT6mnXuOxVpSqxqK6OL1miqaWfhljo+/wB9jZ23W0hi1TdANSgGpQC9SgJFdkB6QHk0qgI1KAalAL1NkAvt5QGm5l5hh4VlfU8j0MBqdT2br8FprVlTW5P0Ggnqp8uUVl+25VXEMdEjxDEiO6nH8gBk1oyA7KrlJyd2dnRowowVOmrJffxMZeTdsgg2QQYCDAQYMeNFyCyhuzacsctxsW+nphA+uIRQaN952mWeu6lSdR8sEHW6+npY3lzl0XvsRzNy3Gwj/UOqGT6IgFDo73XaZ5JVpOm9hotfT1Ubrk1lfXdGrgxcjZabE7Jk3WDGQhkINkEGyCDBk8Ox0SBEESG7pcPgRmCMxovUZuLujTXoU60HCorp/fItblvmCFiocx6Yg9tk6jVvduvxVpRrKotzjNdoJ6Wdnzi8P76m41K3EAalAL1KAX28oCZz28oD0gPJ7lARqUAvU2QC+3lAaLmnmRmFZISdFcPS3/M7s3z8SNFauqa3LHh/Dp6qV8RWX9Fv6FV4zFRIry+I4uc65PgdhoqyUnJ3Z2dKlCnFQgrJHxXk2bIINkEGAgwEGDGjRcgsjdnR8ocnvxREWJNkAZ2dElk3sO7vhpJo0HPm8FTxDicdMvDHnP5Lz32LYwmFZDY1jGBjGiTWgSACsVFRVkchUqSqSc5u7YxWGZFYWRGhzHCRa4TBRpNWYp1JU5KUHZoqfm7lB+GJiQ5vgTvd0PR3cfe+OtdWoOHNYOv4fxOOpXgnyn6+Xt8Dm4UWVMlGsWxlA9lgbIINkEGAgwEGD74LFxIUQRIbi17agjxqNF6jJxd0a6tKFWDjUV0y1OV+Y4eKZWTYrR6mZS95vcePgTZ0ayqLc4ziHD56WV8xeH9Hv6m8vUreVwvt5QC+3lATPsgPUkB5IzKAi9TZAL7eUBz/ADXzMzDN6WydFcKNyaPedppn+qj166pqyyWfDuGy1UvFLlBde+y++RVmJxD4jy97i5zjMuNyVWNtu7OyhCMIqEFZI+awe9kEGyCDAQYCDBjR4qyDs+TeSTF6Y+JaRDu2GaF/Yu7N0z2vMo6fxfmlgoeJcWVO9Oi/zd+3lv6eeLMYwSFAABIACQAFqKecs227sm+3lDAvt5QEPaHAtkCDQzAIIzEkMptO6Ky5z5KMLqjYZpMO74YmTD7lvdumW1q+tp/D+aODqeG8WVW1Ktyl0ffz39fPPGQYsqZKKX2xlAryMBBgIMBBuwg3Z9cNiHw3texxa5pmCLg/1kspuLujxUpxqRcZq6fQtPlXmRmLb0uk2K0epuTh7zdNMlaUK6qKzycbxHh0tNLxR5weH9H98zf328reVgvQWQEzyCAmSAghARfbygOf5t5lbhmdLJOiuHpGTRbqdp2GclHr11TVlktOG8OlqpeKXKCy++y++RVmIjOe8vc4uc4zc41JKrG23dnYwhGEVCCskfNYPeyCDZBBgIMBBg+EeJkP60Cyhuzv+S+SenpxGKbWjmQnD2eznjv2blnW06hp/wDaXwOZ4lxa96VB+b+i9/gd/epsppzovt5QC+3lAL0CAaBANAgOA515JnOPhW+r2nwgPa7uYMj93PLWFX0/+0fgdHwzi9rUq78pfR+/xK9hROmh+RUFnS4MpYGAg3YQbsIAhjJ9IEdzHh7HFrmmYIoQVlNp3R5nCNSLjJXTLT5T5kbi2dLpNitHqAs4W6m6dxkrOhW/yKzycbxLh70srx5weH22f3zOg0CkFYToEBKAgieyA8RooDS4mTWguJ0AmVhuyueoxcmorLKT4njnR4z4rruM9m2a0bCQ/JU05OUnJn0ChRjRpxpRwvt/Exl5N2yCDZBBgIMBBg+cRxmGtBLjQAAkzNgALlZSuYbSV2WRyTyaIEo+IAMW7WGRELU93+Mu6saGn8P5pZOU4nxV1r0qX6e/f+vU7O9TZSijF9vKAX28oBegQDQIBoEAtQXQC2pQHGc68miMDHgACNdzRINibdneVEr6fxfmjkvOGcV/w2pVv09H2/r0K0huLSWuBBBlIgggi4IyVe0dWmmrn3WDO7CAIYyEGQhkyuGY50CMyKy7CDu37TfzEwvUJuElJGnUUY16cqTw/l2ZdcKIHNBbYgOB0ImCrlO6ufP5RcW4voe7UWTySgIInsgNbzJM4PEBv/Ri/wDzNAtdb/rl5MlaG34mnf8AcvUplU532yCDZBBgIMBBgBriQ1rS5zj0taBMknIBZSu7I8ykopyk7JFmcm8oNwwEaNJ0cjdsMHId3dz+Q1sqFBQ5vJyPEuKS1D8FPlD189tjq71NlJKcX28oBfbygF6BANAgGgQC1BdALalALVN0A1KA5TnLlBuJaYsMBscDZsQDJ33ux/I6Rq9Dx81kuOG8Uenfgqc4enltt8CsAHNcWPaWuaZEOEiCMiq1q3I66MlNKSfI9rBnIQZCGQg2QQbIufl6YweHB9r6mHP/AMBdXFL9EfJHA6234mpb9z9TYim62EUlAQeyA8xGBwLZUIIOxEijVzMW4u6KV4vw92HjPguu00Pdhq135iX6qmnBwk0z6Bpq8a9KNSPX5PqYa8G/AQYCDB7gwnOcGtaXOcZAATJJyCyk27I8ylGEXOTskWfyhys3DD62LJ0cipuIbT9luvc57KzoUFTV3k47iXEpamXhjygvnu/ojpb1NlIKoX28oBfbygF6BANAgGgQC1BdALalALVN0A1KAalAL1KA5rm/lVmLb9YyTIzR6XWDwPsu/Y5KPWoKfNZLXh3EpaZ+CfOHpuvYq58N7XOY9pa9pk5poQVWNNOzOwhONSKlF3T6kLB7CDZBBsjM4Rw90eMyC27jU9mfacdh+y9wg5yUTRqdRHT0pVH09ehdUNgaA0CwAGwEgrlKx8/bbd2ehTdDBKAgnIICLUCA0nM/LsPFMFemK32XynTMO7t8fEHTWoqotyw4fxCekl3i8r6rcrHinB8RhzKLDI7OFWHZ1vyuqydOUP1I6/T6ujXV6crvt1+BgTXgk2sZ3DOEx45lChl3d0pMG7jT917hTlP9KI9fVUdOr1ZW26/AszlflmHhW9TiHxSKulRo91vYa3P6Kyo0FTW5yPEOJT1UrLlFdPq/vkb69TZbytF9vKAX28oBegQDQIBoEAtQXQC2pQC1TdANSgGpQC9SgF9vKAX28oDQc08sQ8WOpsmRmiTXyoR7jpXGuX6HRWoKotyy4fxKelfhfOD6fVffMrTifCo8AyiwnN+9KbDs8UKrZ05Q/UjrqGqpV1/xSv6/AwZrwSNkZ/C+ER8Q6UKGXd3GjBu635XXuFOU8IjajV0dOr1Jfx1+BZ/LPL0PCMNeuK72nSl/C3s3z8ALOjRVNbnIa/iE9VLtFYX1e/obq263FeSBmUBKAgnIICLboBbUoARStZ/1JAY39nQJ9Rgw59/q2T+Ml58Eexu/EVbW8b+LMlrfyAsMgvRpbuL1NkAvt5QC+3lAL0CAaBANAgFqC6AW1KAWqboBqUA1KAXqUAvt5QC+3lAL0FkA0CAOAtL41H5oE7GN/Z0AGYgQ+rv9Wye85Lz4I9jd+Iq2t438WZIEhJejSLboBapQEgZlAekB5J+KAi26AWqboBqUA1KAXqbIBfbygF9vKAXoEA0CAaBALUF0AtqUAtU3QDUoBqUAvUoBfbygF9vKAXoLIBoEA0CAWoLoBbUoBbdALVKAan5ICRWpQEzQAoCAJVzQADMoABmUAlO6ASnt5QA12QA9kAPYIBoEAta6ASlqUAAlXNAAMygAGZQCU7oBKeyAGu3lAD2QA9ggGgQC1kAlLUoABLdAAMygAGZQCU6lAL7ID0gIQBAEAKAkoAgCAgIAEAQEoCEAQBACgBQEoAgAQEBAEAQBAEAQEoCCgJQEID//2Q=="}
                                                 style={{height:'20px',width:'20px'}}
                                            />
                                        </Badge>
                                    </Button>{''}
                                </Col>
                                <Col sm={5}>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Form>
                </div>
                <div>
                    <Table dark>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Emailid</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope={"row"}>1</th>
                                <th>{this.state.name}</th>
                                <th>{this.state.address}</th>
                                <th>{this.state.emailid}</th>
                                <th>{this.state.password}</th>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    const {userData} = state.user;
    return {
        userData,
    };
};

export default connect(
    mapStateToProps,
    {
        setUser,
    },
)(RegistrationBasic);
