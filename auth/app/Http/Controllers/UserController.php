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
        $user = new User;
        $user->name=$req->name;
        $user->email=$req->email;
        $user->password=$req->password;
        $result=$user->save();
        if($result)
        {
           echo "sucess";
        }
        else
        {
           echo "failed";
        }
    }
}
