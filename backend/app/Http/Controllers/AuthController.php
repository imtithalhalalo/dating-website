<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{

    public function signup(Request $request) {
        
        $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'gender' => $request->gender,
                'interested_in_gender' => $request->interested_in_gender,
                'location' => $request->location
            ]);

        return response()->json([
            'message' => 'User successfully signed up!',
            'user' => $user
        ]);
    }
    public function login(Request $request) {
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
            'message' => 'User successfully logged In!',
            'user' => $user,
            'token' => $this->respondWithToken($token)
            ]);
    }


    public function me() {
        return response()->json(auth()->user());
    }

    public function logout() {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh() {
        return $this->respondWithToken(Auth::refresh());
    }

    protected function respondWithToken($token) {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 60
        ]);
    }
}
