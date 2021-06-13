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
    
        @yield('css')
        
    
        
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
            <a class="btn btn-outline-light btn-sm m-2"  data-placement="bottom" title="Sign Up" href="{{ route('registration') }}"> Sing Up <i class="fas fa-user-plus"></i> </a>
        </li>
        <li class="nav-item">
            <a class="btn btn-outline-light btn-sm m-2"  data-placement="bottom" title="Login" href="{{ route('login') }}"> Login <i class="fas fa-sign-in-alt"></i> </a>
        </li>
       
      </ul>

</div>
</nav>


    
	
        <div class="limiter">
           

            <div class="container-login100">
                <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                    <form method="post" action="{{ route('Logvalid') }}" class="login100-form validate-form flex-sb flex-w">
                        @csrf
                        @if (session('fail'))
                        <div class="alert alert-danger alert-dismissible fade show" id="message" role="alert">
                            {{ session('fail') }}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        @endif

                        <span class="login100-form-title p-b-32">
                            Account Login
                        </span>
    
                        <span class="txt1 p-b-11">
                            Email
                        </span>
                        <div class="wrap-input100 validate-input m-b-36"  required>
                            <input class="input100" type="email" name="email" placeholder="example@example.com" >
                           
                        </div>
                        
                        <span class="txt1 p-b-11">
                            Password
                        </span>
                        <div class="wrap-input100 validate-input m-b-36"  required>
                          
                            <input class="input100" type="password" name="password" >
                           
                        </div>
                        
                        <div class="flex-sb-m w-full p-b-48">
                            <div class="contact100-form-checkbox">
                                <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
                                <label class="label-checkbox100" for="ckb1">
                                    Remember me
                                </label>
                            </div>
    
                            <div>
                                <a href="#" class="txt3">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
    
                        <div class="cbtn btn-outline-dark">
                            <button class="btn btn-outline-dark">
                                Login
                            </button>
                        </div>
    
                    </form>
                </div>
            </div>
        </div>
        

        
    
    </body>

   <script src="{{ asset('js/app.js') }}" defer></script>

   <script src="{{ asset('js/jquery.js') }}" defer></script>



</html>
