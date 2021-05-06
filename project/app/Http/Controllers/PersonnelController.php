<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Personnel;

class PersonnelController extends Controller
{
    //
    public function index(){
        return view('personnel_index');
    }

    public function formsubmit(Request $request){
        $data = $request->all()["values"];
        $personnel = new Personnel;

        $personnel->email = $data["email"];
        $personnel->password = $data["passWord"];
        $personnel->last_name = $data["lastName"];
        $personnel->first_name = $data["firstName"];
        $personnel->hospital_id = $data["Hkey"];
        $personnel->position = $data["position"];
        $personnel->date_of_birth = $data["age"];
        $personnel->save();

        error_log("lmao it worked");
        return response()->json([$request->all()]);
    }
}
