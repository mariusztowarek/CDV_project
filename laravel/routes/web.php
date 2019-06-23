<?php

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

Route::patch('/angular/{id}', 'angular@update')->name('update');

Route::get('/', function () {
    return view('welcome');
});

Route::get('angular', 'angular@test')->name('angular');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/angular', 'angular@add')->name('home');

Route::get('article', 'angular@article')->name('article');


Route::post('calendartest', 'angular@calendartest')->name('calendartest');
