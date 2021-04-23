<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// get(<url after home url 'www.bedability.com/'>, which action to perform from controller class)
Route::get('/', [HomeController::class, 'index']);

Route::get('/patient-registration', function () {
    return view('Patient Registration UI.index');
});

Route::get('/controller', 'PatientRegistrationController@index');
