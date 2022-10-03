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
    public function editProfile(Request $request){
        $id = $request->id;
        $extension = $request->imageExtension;
        $encryptedImage =$request->encryptedImage;

        if(!$id){
            return response()->json([
                "status"=>"failed"
            ], 500);
        }

        $user = User::find($id);
        

        $image_no = time();//imageid
        $image = base64_decode($encryptedImage);
        $path = "../uploads/".$image_no.".".$extension;
        $status = file_put_contents($path,$image);
        $user = User::find($id);
        $user->name = $request->name;
        $user->age = $request->age;
        $user->bio = $request->bio;
        $user->image = $path;
        $user->save();

        return response()->json([
            "status"=>"success",
            "user" => $user
        ], 200);
    }

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

    public function addBlock(Request $request)
    {
        
        $block = Block::create([
                'user_id' => $request->user_id,
                'blocked_id' => $request->blocked_id,
            ]);

        return response()->json([
            'message' => 'You Blocked This User',
            'user' => $block
        ]);
    }

    public function getFavorites(Request $request)
    {
        $id = $request->id;
        
        $favored_user = DB::table('users')
                        ->select('*')
                        ->join('favorites', 'users.id', '=', 'favorites.favored_id')
                        ->where('favorites.user_id', '=', $id)
                        ->get();
        return response()->json($favored_user);
    }

    
}
