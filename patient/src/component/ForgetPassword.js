import React, { Component } from 'react';
import {Container} from 'react-bootstrap';


export class ForgetPassword extends Component {
  back = e => {
    e.preventDefault(); 
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Container className = "App-container">
       <form>
          <h3 className = "App-title">Change Password</h3>
          <br/>
          <div className="form-group">
              <label className = "App-label">Code</label>
              <input type="email" className="form-control" placeholder="Enter code"  onChange={handleChange('code')} defaultValue={values.code} required/>
          </div>

          <div className="form-group">
              <label className = "App-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter password"  onChange={handleChange('passWord')} defaultValue={values.passWord} required/>
          </div>

          <div className="form-group">
              <input type="password" className="form-control" placeholder="Confirm password"  onChange={handleChange('confirmPassword')} defaultValue={values.confirmPassword} required/>
          </div>
          <br/>
          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="submit" className="btn btn-success btn-lg mx-2" onClick  = {this.back}>Continue</button>
            </div>
        </form>
      </Container>
    );
  }
}

export default ForgetPassword;