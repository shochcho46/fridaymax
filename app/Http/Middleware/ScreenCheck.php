<?php

namespace App\Http\Middleware;

use App\Models\Subscribe;
use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ScreenCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        $user = Auth::user();

        if ($user->type == "normal") {

            $screen = User::find($user->id)->logdetails->count();

            $subscribid = Subscribe::find($user->subscribe_id);

            $getscreen = $subscribid->screen;
            $validscreen = (int) $getscreen;

            if ($validscreen < $screen) {

                return redirect()->route('screencheck.message');
            }

        }

        return $next($request);
    }
}
