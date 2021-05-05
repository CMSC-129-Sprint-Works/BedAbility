<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Patient;
use Error;

class PatientPostController extends Controller{
    public function formsubmit_old(Request $request){
        $validatedData = $request->validate([
            'id' => 'nullable',
            'email' => 'nullable',
            'first_name' => 'nullable',
            'last_name' => 'nullable',
            'date_of_birth' => 'nullable',
            'address' => 'nullable',
            'contact_number' => 'nullable',
            'email_verified_at' => 'nullable',
            'password' => 'nullable',
            'remember' => 'nullable',
            'timestamps' => 'nullable'
        ]);
        return json_encode($validatedData);
    }

    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function formsubmitold2(Request $request)
    {
       $patient = $request->all();
       $patient_keys = array_keys($patient);
       error_log($patient_keys[0]);
       error_log(gettype($patient["values"]["passWord"]));
       error_log(json_encode($patient));
       Patient::Task($request->all());
       error_log("lmao submitted");

       return response()->json([$request->all()]);
    }

    public function formsubmit(Request $request)
    {
        $data = $request->all()["values"];
        error_log("test1");
        $patient = new Patient;

        $patient->email = $data["email"];
        $patient->first_name = $data["firstName"];
        $patient->last_name = $data["lastName"];
        $patient->date_of_birth = $data["birthDate"];
        $patient->address = $data["address"];
        $patient->contact_number = $data["contactNumber"];
        $patient->password = $data["passWord"];
        $patient->save();
        error_log(json_encode($patient));

        error_log("lmao it worked");
        return response()->json([$request->all()]);
    }
}
