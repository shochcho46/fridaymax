<?php

namespace App\Http\Controllers;

use App\Helpers\UserSystemInfoHelper;
use App\Models\Logdetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            $user = Auth::user();
            $getip = UserSystemInfoHelper::get_ip();
            $getbrowser = UserSystemInfoHelper::get_browsers();
            $getdevice = UserSystemInfoHelper::get_device();
            $getos = UserSystemInfoHelper::get_os();

            $data = [
                'user_id' => $user->id,
                'ipaddress' => $getip,
                'browser' => $getbrowser,
                'device' => $getdevice,
                'os' => $getos,
            ];
            Logdetail::firstOrCreate($data);

            if ($user->type == "normal") {
                return redirect()->route('register.index');
            }
            if ($user->type == "superadmin" || $user->type == "subadmin") {
                return redirect()->route('admin.dashboard');
            }

        } else {
            return back()->with('fail', 'Wrong credentials');
        }
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('Home');
    }

}
