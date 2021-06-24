import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import LoginButton from './LoginButton';



export class Login extends Component { //
    createAcc = e => {
        e.preventDefault();
        this.props.toCreateAccount();
    };

    forgetPass = e => {
        e.preventDefault();
        this.props.toForgetPassword();
    };

    loginto = e => {
        e.preventDefault();
        this.props.toLogin();
    };

    render() {
        const { values, handleChange, login} = this.props;
        return (
            <Container className = "App-container">
                <form>
                    <h1 className = "App-welcome">B e d A b i l i t y</h1>
                    <br/>
                    <h3 className = "App-title">Log in</h3>
                    <br/>
                    <div className="form-group">
                        <label className = "App-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter email"  onChange={handleChange('email')} defaultValue={values.email} required/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label className = "App-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"  onChange={handleChange('passWord')} defaultValue={values.passWord} required/>
                    </div>
                    <br/>
                    <LoginButton login = {login}    />
                    <br/>
                    <p className="App-link">        
                        <a class = "link-success" href="./ForgetPassword" onClick = {this.forgetPass}>Forget Password?</a>
                        <br/>
                        <a class = "link-success" href="./CreateAccount" onClick = {this.createAcc}>Don't have an account? Create Account</a>
                    </p>
                </form>
            </Container>
        );      
    }
}

    export default Login;