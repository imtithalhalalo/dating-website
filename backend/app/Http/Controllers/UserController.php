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

    public function addToFavorite(Request $request)
    {
        
        $favorite = Favorite::create([
                'user_id' => $request->user_id,
                'favored_id' => $request->favored_id,
            ]);

        return response()->json([
            'message' => 'User successfully added to favorite!',
            'user' => $favorite
        ]);
    }

    
}