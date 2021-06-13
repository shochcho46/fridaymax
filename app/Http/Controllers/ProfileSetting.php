<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ProfileSetting extends Controller
{
    //

    public function __construct()
    {
        date_default_timezone_set('Asia/Dhaka');
        $this->middleware('auth');

    }

    public function profileload()
    {
        $user = Auth::user();
        $screenlist = User::find($user->id)->logdetails;

        return view('layout.profiles.profile', compact('user', 'screenlist'));
    }

    public function updateitem(Request $request, User $item)
    {
        //
        $user = Auth::user();
        $password = $request->oldpassword;

        if (Hash::check($password, $user->password)) {
            $data = $this->validateRequest();
            $newpass = $request->password;
            $data['password'] = Hash::make($newpass);
            $item->update($data);

            return back()->with('save', 'Data Updated');
        } else {
            return back()->with('fail', 'Old Password is not correct');
        }

    }

    public function profilepic(Request $request, User $pic)
    {
        //
        $data = $this->validateRequestPicture();

        if ($request->hasFile('piclocation')) {

            $baseurl = url('/');

            $images = $request->file('piclocation');

            $extension = $images->extension();
            $filename = time() . '.' . $extension;
            $path = $images->storeAs('profile', $filename, 'public');
            $fullpathurl = $baseurl . '/storage/' . $path;

            $data['piclocation'] = $fullpathurl;

            $pic->update($data);
            return back()->with('save', 'Data Updated');

        } else {
            return back()->with('picerror', 'Profile Picture Upload fail');
        }

    }

    public function validateRequest()
    {

        $data = request()->validate([

            'name' => 'required|min:3',
            'email' => 'required|email',
            'type' => 'required',
            'lastday' => '',
            'contact' => 'required|numeric',
            'birthdate' => 'required',
            'password' => 'required|min:8|confirmed',

        ]);

        return $data;

    }

    public function validateRequestPicture()
    {
        if (request()->hasFile('piclocation')) {

            $data = request()->validate([

                'piclocation' => 'required',
            ]);
        }

        return $data;

    }

}
