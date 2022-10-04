<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller {

    public function signup(Request $request) {
        
        $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'gender' => $request->gender,
                'location' => $request->location
            ]);
        $token = Auth::login($user);
        return response()->json([
            'message' => 'User successfully signed up!',
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(Request $request) {
        $credentials = $request->only('email', 'password');
        $token = Auth::attempt($credentials);
        User::find(Auth::user()->id);
        
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }
        return response()->json([
            'message' => 'User successfully logged In!',
            'user' => Auth::user(),
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
