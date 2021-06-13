<?php

namespace App\Http\Controllers;

use App\Models\Mainmenu;
use App\Models\Submenu;
use Illuminate\Http\Request;

class SubmenuController extends Controller
{

    public function __construct()
    {
        date_default_timezone_set('Asia/Dhaka');
        $this->middleware('auth');
        $this->middleware('admincheck');

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $submenu = Submenu::orderBy('serial', 'asc')->get();

        return view('layout.admins.submenu.list', compact('submenu'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

        $mainmenu = Mainmenu::orderBy('serial', 'asc')->get();

        return view('layout.admins.submenu.create', compact('mainmenu'));
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
        $data = $this->validateRequest();
        Submenu::create($data);
        return back()->with('success', 'Data Saved');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Submenu  $submenu
     * @return \Illuminate\Http\Response
     */
    public function show(Submenu $submenu)
    {
        //

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Submenu  $submenu
     * @return \Illuminate\Http\Response
     */
    public function edit(Submenu $submenu)
    {
        //
        $mainmenu = Mainmenu::orderBy('serial', 'asc')->get();
        $data = $submenu;
        return view('layout.admins.submenu.edit', compact('data', 'mainmenu'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Submenu  $submenu
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Submenu $submenu)
    {
        //
        $data = $this->validateRequest();
        $submenu->update($data);
        return redirect()->route('submenus.index')->with('update', 'Data Update');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Submenu  $submenu
     * @return \Illuminate\Http\Response
     */
    public function destroy(Submenu $submenu)
    {
        //
        $submenu->delete();
        return back()->with('success', 'Data Deleted');
    }

    public function validateRequest()
    {

        $data = request()->validate([

            'sub_name' => 'required',
            'mainmenu_id' => 'required',
            'serial' => 'required',

        ]);

        return $data;

    }
}
