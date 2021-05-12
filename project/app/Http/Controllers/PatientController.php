<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Patient;
use Error;

class PatientController extends Controller{

    public function index() {
        return view('patient_index');
    }

    public function formsubmit(Request $request)
    {
        $data = $request->all()["values"];

        error_log("Submitting new patient");

        $patient = new Patient;
        $patient->email = $data["email"];
        $patient->first_name = $data["firstName"];
        $patient->last_name = $data["lastName"];
        $patient->date_of_birth = $data["birthDate"];
        $patient->address = $data["address"];
        $patient->contact_number = $data["contactNumber"];
        $patient->password = $data["passWord"];
        $patient->save();

        error_log("Patient registration succesful");
        return response()->json([$request->all()]);
    }
}
