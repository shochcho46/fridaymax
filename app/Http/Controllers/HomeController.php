<?php

namespace App\Http\Controllers;

use App\Models\Mainmenu;
use App\Models\Submenu;

class HomeController extends Controller
{

    public function index()
    {
        $submenu = Submenu::orderBy('serial', 'asc')->get();
        $mainmenu = Mainmenu::orderBy('serial', 'asc')->get();
        return view('layout.normal.home', compact('mainmenu', 'submenu'));
    }
    public function login()
    {

        return view('layout.normal.login.login');

    }

    public function reg()
    {
        return view('layout.normal.login.reg');

    }

    public function content($mainid, $subid)
    {
        $content = Mainmenu::find($mainid);
        $subcontent = Submenu::find($subid);

        return view('layout.normal.content', compact('content', 'subcontent'));

    }
    public function contentmain($mainid)
    {
        $content = Mainmenu::find($mainid);

        return view('layout.normal.content', compact('content'));
    }

    public function movie()
    {
        // return view('welcome');
        return view('layout.normal.play');
    }

    public function video()
    {
        // $videofile = url('movie/The Dark Knight Rises (2012)/oceans.mp4');
        $videofile = 'movie/The Dark Knight Rises (2012)/file.mp4';

        $video = $videofile;
        return response()->file($video);

    }

}
