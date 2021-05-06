<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\PersonnelController;

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

Route::get('/patient', [PatientController::class, 'index']);

Route::post('/patient', [PatientController::class, 'formsubmit']);


Route::get('/personnel', [PersonnelController::class, 'index']);

Route::post('/personnel', [PersonnelController::class, 'formsubmit']);

Route::view('/{path?}', 'app');
