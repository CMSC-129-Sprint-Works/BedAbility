<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PatientReceiverController extends Controller
{
    public function ReceiveIt(Request $request){
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
}
