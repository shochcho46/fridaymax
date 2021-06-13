<?php

namespace App\Http\Controllers;

class AdminController extends Controller
{
    public function __construct()
    {
        date_default_timezone_set('Asia/Dhaka');
        $this->middleware('auth');
        // $this->middleware('admincheck');

    }

    public function dashboard()
    {

        return view('layout.admins.dashboard');
    }
}
