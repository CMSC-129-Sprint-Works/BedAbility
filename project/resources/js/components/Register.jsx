import React, { Component } from 'react';
import axios from "axios";

class Register extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            phone : '',
            NatID : '',
            password : '',
            userLevel : 'Job Expert'
        }
        this.firstName = this.firstName.bind(this);
        this.lastName = this.lastName.bind(this);
        this.takePhone = this.takePhone.bind(this);
        this.takeEmail = this.takeEmail.bind(this);
        this.takeID = this.takeID.bind(this);
        this.takePassword = this.takePassword.bind(this);
        this.takeLevel = this.takeLevel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    firstName(event){
        this.setState({firstname : event.target.value})
    }
    lastName(event){
        this.setState({lastname : event.target.value})
    }
    takePhone(event){
        this.setState({phone : event.target.value})
    }
    takeEmail(event){
        this.setState({email : event.target.value})
    }
    takeID(event){
        this.setState({ID : event.target.value})
    }
    takePassword(event){
        this.setState({password : event.target.value})
    }
    takeLevel(event){
        this.setState({userLevel : event.target.value})
    }

    handleSubmit(){

        const packets = {
            firstname:  this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        };
        axios.post('/patient/formsubmit', packets)
            .then(
                response => alert(JSON.stringify(response.data))
                )
            .catch(error => {
                console.log("ERROR:: ",error.response.data);

                });
    }

    render(){
        return (
<div>

            <img class="wave" src={wave} alt="img"/>
            <div class="container">
                <div class="login-content">
                    <form>
                        <h2 class="title">Register</h2>
                           <div class="input-div one">
                              <div class="i">
                                      <i class="fas fa-user"></i>
                              </div>
                              <div class="div">
                                      <h5></h5>
                                      <input type="text" placeholder="First Name" onChange={this.firstName} class="input"/>
                              </div>
                           </div>

                           <div class="input-div one">
                              <div class="i">
                                      <i class="fas fa-user"></i>
                              </div>
                              <div class="div">
                                      <h5></h5>
                                      <input type="text" placeholder="Last Name" onChange={this.lastName} class="input"/>
                              </div>
                           </div>

                           <div class="input-div pass">
                              <div class="i">
                                   <i class="fas fa-envelope-square"></i>
                              </div>
                              <div class="div">
                                   <h5></h5>
                                   <input type="email" placeholder="Email" onChange={this.takeEmail} class="input" />
                           </div>
                        </div>

                        <div class="input-div pass">
                              <div class="i">
                                   <i class=""></i>
                              </div>
                              <div class="div">
                              <select onChange={this.takeLevel} name="userLevel">
                                    <option value="">Choose level</option>
                                    <option value="Job Expert">Job Expert</option>
                                    <option value="Client">Client</option>
                                </select>
                           </div>
                        </div>

                           <div class="input-div pass">
                              <div class="i">
                                   <i class="fas fa-lock"></i>
                              </div>
                              <div class="div">
                                   <h5></h5>
                                   <input type="password" placeholder="Password" onChange={this.takePassword} class="input" />
                           </div>
                        </div>

                        <div class="input-div pass">
                              <div class="i">
                                   <i class="fas fa-lock"></i>
                              </div>
                              <div class="div">
                                   <h5></h5>
                                   <input type="password" placeholder="Confirm Password" class="input" />
                           </div>
                        </div>
                        <input type="submit" class="btn" onClick={this.handleSubmit} value="Register"/>
                    </form>
                </div>
            </div>

                </div>
        );
    }
}
export default Register;
