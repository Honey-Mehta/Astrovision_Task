<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Validator;

class UserController extends Controller
{
    public function register(Request $req)
{
    // Check if the user with the provided email already exists
    $existingUser = User::where('email', $req->email)->first();

    if ($existingUser) {
        // User already registered
        return response()->json(['status' => 'error', 'message' => 'User already registered']);
    }

    // Create a new user
    $user = new User;
    $user->name = $req->name;
    $user->email = $req->email;
    $user->password = $req->password;
    $result = $user->save();

    if ($result) {
        return response()->json(['status' => 'success']);
    } else {
        return response()->json(['status' => 'error', 'message' => 'Registration failed']);
    }






    
}


public function login(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|min:5|max:12'
    ]);

    $user = User::where('email', '=', $request->email)->first();

    if ($user) {
        if ($request->password){
            // You can customize the response based on your needs
            return response()->json(['status' => 'success', 'message' => 'Login successful', 'user' => $user]);
        } else {
            return response()->json(['status' => 'fail', 'message' => 'Password does not match']);
        }
    } else {
        return response()->json(['status' => 'fail', 'message' => 'This email is not registered']);
    }
}


}
