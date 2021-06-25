import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types

// Route Views
import BasicTable from "./BasicTable";
import PatientInfo from "./PatientInfo";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/case" />
  },
  {
    path: "/hospital",
    component: BasicTable
  },
  {
    path: "/information",
    component: PatientInfo
  }
];