import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import DataSharingAgreement from "./DataSharingAgreement";
import Login from "./Login";

import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={DataSharingAgreement} />
                    <Route path="/Login" component={Login} />
                </Switch>
            </Router>
        )
    }
}