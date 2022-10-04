<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Message;

class MessageController extends Controller {

    public function sendMessage(Request $request) {
        $message = new Message;
        $message->user_id = Auth::user()->id;
        $message->receiver_id = $request->receiver_id;
        $message->message = $request->message;

        if($message->save()) {
            return response()->json([
                'status' => 'success',
                'token' => Auth::refresh() 
            ]);
        }
    }

}
