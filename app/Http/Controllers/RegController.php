<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;

class RegController extends Controller
{
    //

    public function __construct()
    {
        date_default_timezone_set('Asia/Dhaka');

    }

    public function store(Request $request)
    {
        //
        $current = Carbon::now();
        $trialExpires = $current->addDays(30);
        $pass = $request->password;

        $data = $this->validateRequest();
        $data['password'] = Hash::make($pass);
        $data['location'] = "";
        $data['subscribe_id'] = "1";
        $data['type'] = "normal";
        $data['lastday'] = $trialExpires;
        User::create($data);
        return back()->with('success', 'Registration Successful');
    }

    public function validateRequest()
    {

        $data = request()->validate([

            'name' => 'required',
            'email' => 'required|email|unique:users',
            'type' => '',
            'lastday' => '',
            'contact' => 'required|numeric',
            'birthdate' => 'required',
            'password' => 'required|min:8|confirmed',
        ]);

        return $data;

    }
}
