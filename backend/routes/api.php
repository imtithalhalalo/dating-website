<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\UserController;

Route::group(["prefix"=> "v0.1"], function(){

    Route::group(["middleware" => "user"], function(){
        Route::get('/allusers', [UserController::class, 'allUsers'])->name('all-users');
        Route::get('/allfemaleusers', [UserController::class, 'allFemaleUsers'])->name('all-female-users');
        Route::get('/allmaleusers', [UserController::class, 'allMaleUsers'])->name('all-male-users');
        Route::post('/addfavorite', [UserController::class, 'addToFavorite'])->name('addtofavorite');
        Route::post('/removefavorite', [UserController::class, 'removeFavorite'])->name('removefavorite');
        Route::post('/addblocked', [UserController::class, 'addBlock'])->name('add-block');
        Route::get('/getfavorites', [UserController::class, 'getFavorites'])->name('get-favorite');
        Route::post('/editprofile', [UserController::class, 'editProfile'])->name('edit-profile');
        Route::post('/sendmessage', [MessageController::class, 'sendMessage'])->name('send-message');
        Route::post('/receivemessages', [MessageController::class, 'receiveMessages'])->name('receive-messages');
    });

    Route::post('/signup', [AuthController::class, 'signup'])->name('signup');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});


