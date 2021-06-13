<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title></title>

       
        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('fontawesome/css/all.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/login/util.css') }}" rel="stylesheet">
        <link href="{{ asset('css/login/main.css') }}" rel="stylesheet">
        
        <link href="{{ asset('css/materialdesignicons.min.css') }}" rel="stylesheet">
    
       
        
    
        
    </head>


    <body>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="{{ route('Home') }}">Friday Maxx</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
            <a class="btn btn-outline-light btn-sm m-2"  data-placement="bottom" title="Sign Up" href="{{ route('Reg') }}"> Sing Up <i class="fas fa-user-plus"></i> </a>
        </li>
        <li class="nav-item">
            <a class="btn btn-outline-light btn-sm m-2"  data-placement="bottom" title="Login" href="{{ route('login') }}"> Login <i class="fas fa-sign-in-alt"></i> </a>
        </li>
       
      </ul>

</div>
</nav>
    
    </body>

    <script src="{{ asset('js/app.js') }}" defer></script>
 
    <script src="{{ asset('js/jquery.js') }}" defer></script>
 
 
 
 </html>
 