import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

class JSExample extends Component {
    render() {
        const state = true;
        if (state){
            return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">I'm an example2 component!</div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
}
export default JSExample;

if (document.getElementById('example2')) {
    ReactDOM.render(<JSExample />, document.getElementById('example2'));
}
