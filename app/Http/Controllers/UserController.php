<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function __construct()
    {
        date_default_timezone_set('Asia/Dhaka');
        $this->middleware('auth');
        // $this->middleware('admincheck');

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getuser($usertype)
    {
        //
        $getuser = User::where('type', $usertype)->orderBy('id', 'desc')->get();

        return view('layout.admins.user.list', compact('getuser'));
    }

    public function index()
    {
        //
        $getuser = User::all();

        return view('layout.admins.user.list', compact('getuser'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('layout.admins.user.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $current = Carbon::now();
        $trialExpires = $current->addDays(30);
        $pass = $request->password;

        $data = $this->validateRequest();
        $data['password'] = Hash::make($pass);
        $data['lastday'] = $trialExpires;
        $data['birthdate'] = "";
        User::create($data);
        return back()->with('success', 'User Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $userdetails)
    {
        ;
        $paymentlist = Package::where('user_id', $userdetails->id)->orderBy('created_at', 'desc')->paginate(10);

        $screenlist = User::find($userdetails->id)->logdetails;

        return view('layout.admins.user.show', compact('userdetails', 'paymentlist', 'screenlist'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //

        return view('layout.admins.user.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //

        $pass = $request->password;

        $data = $this->validateRequestUpdate();
        $data['password'] = Hash::make($pass);

        $user->update($data);
        return redirect()->route('users.index')->with('update', 'Data Update');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
        if (($user->logdetails()->count()) || ($user->packages()->count()) || ($user->subscribes()->count())) {
            return back()->with('success', 'This user Cannot be deleted');
        }
        $user->delete();
        return back()->with('success', 'Data Deleted');
    }

    public function validateRequest()
    {

        $data = request()->validate([

            'name' => 'required',
            'email' => 'required|email|unique:users',
            'type' => 'required',
            'lastday' => '',
            'contact' => 'required|numeric',
            'birthdate' => '',
            'password' => 'required|min:8|confirmed',
        ]);

        return $data;

    }
    public function validateRequestUpdate()
    {

        $data = request()->validate([

            'name' => 'required',
            'email' => 'required|email',
            'type' => 'required',
            'lastday' => '',
            'contact' => '',
            'birthdate' => '',
            'password' => 'required|min:8|confirmed',
        ]);

        return $data;

    }

}
