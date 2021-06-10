<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PatientRegistrationController extends Controller
{
    public function index(){
        return view('HP Registration-UI.index');
    }
}
