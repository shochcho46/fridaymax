<?php

namespace App\Http\Controllers;

use App\Models\Logdetail;
use App\Models\Mainmenu;
use App\Models\Package;
use App\Models\Submenu;
use App\Models\Subscribe;
use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class RegUserController extends Controller
{
    //
    public function __construct()
    {
        date_default_timezone_set('Asia/Dhaka');
        $this->middleware('auth');

    }

    public function index()
    {
        $submenu = Submenu::orderBy('serial', 'asc')->get();
        $mainmenu = Mainmenu::orderBy('serial', 'asc')->get();
        return view('layout.normal.main', compact('mainmenu', 'submenu'));
    }
    public function home()
    {
        $user = Auth::user();

        if ($user->type == "normal") {
            return redirect()->route('register.index');
        }
        if (($user->type == "superadmin") || ($user->type == "subadmin")) {
            return redirect()->route('admin.dashboard');
        } else {
            return redirect()->route('Home');
        }
    }

    public function subscription()
    {
        $subscribe = Subscribe::all();
        return view('layout.common.subscription', compact('subscribe'));
    }

    public function addsubscription(Subscribe $subscribetion)
    {
        $user = Auth::user();

        $data = [

            'user_id' => $user->id,
            'subscribe_id' => $subscribetion->id,
            'amount' => $subscribetion->amount,
            'payment' => 'process',
            'tranid' => rand(10, 1000),
            'method' => 'mobile',
            'tranbankid' => rand(100, 1000),
        ];

        if (Package::create($data)) {

            $OldUser = User::find($user->id);
            $subscribe = Subscribe::find($subscribetion->id);

            //last day of subscribtion
            $newdate = new Carbon($OldUser->lastday);
            //day of subscribe package
            $addDate = $subscribe->day;
            //add day to user
            $latestday = $newdate->addDays($addDate);

            $OldUser->lastday = $latestday;
            //add subscribe id
            $OldUser->subscribe_id = $subscribetion->id;

            $OldUser->save();

            return redirect()->route('paymentlist.index')->with('update', 'Data Saved');
        } else {
            return redirect()->route('paymentlist.index')->with('success', 'Error in Data Saving');
        }

    }

    public function paymentlist()
    {
        $user = Auth::user();
        $paymentlist = Package::where('user_id', $user->id)->paginate(30);

        return view('layout.common.paymentlist', compact('paymentlist'));
    }

    public function profileload()
    {
        $user = Auth::user();

        return view('layout.common.profile', compact('user'));
    }
    public function screeenchekmessage()
    {
        return view('layout.common.message');
    }
    public function logutdevice()
    {
        $user = Auth::user();

        $screenlist = User::find($user->id)->logdetails;

        return view('layout.common.deviceout', compact('screenlist'));
    }

    public function destroy(Logdetail $device)
    {
        //
        $device->delete();
        return back()->with('success', 'Data Deleted');
    }

}
