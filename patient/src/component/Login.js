
import React, { Component } from 'react';
import {Container} from 'react-bootstrap';


export class Login extends Component { //
    createAcc = e => {
        e.preventDefault();
        this.props.toCreateAccount();
    };

    forgetPass = e => {
        e.preventDefault();
        this.props.toForgetPassword();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <Container className = "App-container">
                <form>
                    <h1 className = "App-welcome">Welcome to BedAbility!</h1>
                    <br/>
                    <h3 className = "App-title">Log in</h3>
                    <br/>
                    <div className="form-group">
                        <label className = "App-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter email"  onChange={handleChange('email')} defaultValue={values.email} required/>
                    </div>

                    <div className="form-group">
                        <label className = "App-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"  onChange={handleChange('passWord')} defaultValue={values.passWord} required/>
                    </div>

                    <button type="submit" className="btn btn-success btn-lg btn-block" onClick  = {this.continue}>Login</button>
                    <br/>
                    <p className="text-right">
                        <a href="./ForgetPassword" onClick = {this.forgetPass}>Forget Password?</a>
                        <br/>
                        <a href="./CreateAccount" onClick = {this.createAcc}>Don't have an account? Create Account</a>
                    </p>
                </form>
            </Container>
        );      
    }
}

    export default Login;

