import React, { useState } from "react";
import {Container} from "react-bootstrap";
import InfoService from "./services/InfoService";


export const EditForm = (props, values, handleChange) => {
  const next = e => {
    e.preventDefault();
    props.nextStep();
  };

  const [info, setInfo] = useState(values);

  //we will use edit state to determine which button to show
  const [edit, setEdit] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    saveInfo();
    //set edit to false when save is clicked
    setEdit(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    //set edit to true when edit is clicked
    setEdit(true);
  };

  const saveInfo = () => {
    var data = {
      email: info.email,
      firstname: info.firstname,
      lastname: info.lastname,
      address: info.address,
      contactNumber: info.contactNumber,
      birthDate: info.birthDate, 
      symptoms: info.symptoms
    };

    if (info.id === null) {
      InfoService.create(data)
        .then((response) => {
          console.log("create", response.data);
          setInfo({
            id: response.data.id,
            email: response.data.email,
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            address: response.data.address,
            contactNumber: response.data.contactNumber,
            birthDate: response.data.birthDate,
            symptoms: response.data.symptoms
          });
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      InfoService.update(info.id, data)
        .then((response) => {
          console.log(response);
          setInfo({
            id: response.data.id,
            email: response.data.email,
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            address: response.data.address,
            contactNumber: response.data.contactNumber,
            birthDate: response.data.birthDate,
            symptoms: response.data.symptoms
          });
          console.log(response.data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  return (
    <>
    <div className="App-account">
      <br/>
      <h5 className="App-title">My Information</h5><br/>
      <div className = "App-text">
            <dl class="row justify-content-md-center">
              <dt class="col-sm-5"><label
                  className="form-control-label"
                  htmlFor="input-last-name">
                  First Name:
                </label>
              </dt>
              <dd class="col-sm-5"><input
                  className="form-control-alternative"
                  id="firstName"
                  required
                  value={info.firstName}
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  disabled={!edit}/>
              </dd><br/>
              <dt class="col-sm-5"><label
                  className="form-control-label"
                  htmlFor="input-last-name">
                  Last Name:
                </label>
              </dt>
              <dd class="col-sm-5"><input
                  className="form-control-alternative"
                  id="lastName"
                  required
                  value={info.lastName}
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  disabled={!edit}/>
              </dd><br/>

              <dt class="col-sm-5"><label
                  className="form-control-label"
                  htmlFor="input-last-name">
                  E-mail:
                </label>
              </dt>
              <dd class="col-sm-5">                
              <input
                  className="form-control-alternative"
                  id="email"
                  required
                  value={info.email}
                  onChange={handleChange}
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  disabled={!edit}/>
              </dd><br/>

              <dt class="col-sm-5"><label
                  className="form-control-label"
                  htmlFor="input-last-name">
                  Address:
                </label>
              </dt>
              <dd class="col-sm-5"><input
                  className="form-control-alternative"
                  id="address"
                  required
                  value={info.address}
                  onChange={handleChange}
                  type="text"
                  name="address"
                  placeholder="Address"
                  disabled={!edit}/>
              </dd><br/>

              <dt class="col-sm-5"><label
                  className="form-control-label"
                  htmlFor="input-last-name">
                  Contact Number:
                </label><br/>
              </dt>
              <dd class="col-sm-5"><input
                  className="form-control-alternative"
                  id="contactNumber"
                  required
                  value={info.contactNumber}
                  onChange={handleChange}
                  type="text"
                  name="contactNumber"
                  placeholder="Contact Number"
                  disabled={!edit}/><br/>
              </dd>
              <dt class="col-sm-5"><label
                    className="form-control-label"
                    htmlFor="input-last-name">
                    Birth Date:
                  </label></dt>
              <dd class="col-sm-5"><input
                    className="form-control-alternative"
                    id="birthDate"
                    required
                    value={info.birthDate}
                    onChange={handleChange}
                    type="text"
                    name="birthDate"
                    placeholder="Birth Date"
                    disabled={!edit}/>
                </dd><br/>
              <dt class="col-sm-5"><label
                    className="form-control-label"
                    htmlFor="input-last-name">
                    Symptoms:
                  </label>
              </dt>
              <dd class="col-sm-5">            
                  <textarea 
                  id = "symptoms"
                  onChange={handleChange} 
                  value={info.symptoms} 
                  rows={5}
                  cols={25}
                  name="symptoms"
                  placeholder="Symptoms"
                  disabled={!edit}/>
              </dd><br/>
            </dl>
          </div>
          <div class="d-grid gap-2 col-2 mx-auto">
              {edit === true ? (
                <button className="btn btn-success btn-lg" onClick={handleSave}>
                  Save
                </button>
              ) : (
                <>
                <button className="btn btn-success btn-lg" onClick={handleEdit}>
                Edit
                </button>
                <button className="btn btn-success btn-lg" onClick={next}>
                Continue
                </button>
                </>
                )}
          </div><br/>
    </div>
  </>
)}
export default EditForm;














          
          
      