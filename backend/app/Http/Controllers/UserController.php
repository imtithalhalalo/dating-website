<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Models\Block;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function allUsers(){
        
        $users = User::all();
        return response()->json($users);
    }

}
