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

        
        <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    
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




<form method="post" action="{{ route('Reg.store') }}">
    @csrf
	
        <div class="limiter">

            @if (session('success'))
                            <div class="alert alert-success alert-dismissible fade show" id="message" role="alert">
                                {{ session('success') }}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        @endif
            <div class="container-login100">

                        
                <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                    <form class="login100-form validate-form flex-sb flex-w">
                        <span class="login100-form-title p-b-32">
                            REG
                        </span>
    
                        <span class="txt1 p-b-11">
                            Name
                        </span>
                        <div class="wrap-input100 validate-input m-b-36" >
                            <input class="input100" type="text" name="name" value="{{ old('name') }}" placeholder="Your Full Name" required minlength="2">
                           
                        </div>

                        <span class="txt1 p-b-11">
                            Email
                        </span>
                        <div class="wrap-input100 validate-input m-b-36" >
                            <input class="input100" type="email" name="email" value="{{ old('email') }}" placeholder="example@example.com" required>
                            
                        </div>
                        @if($errors->has('email'))
                            <div class="error text-danger m-2">{{ $errors->first('email') }}</div>
                        @endif
                        <span class="txt1 p-b-11">
                            Password
                        </span>
                        <div class="wrap-input100 validate-input m-b-36" >
                          
                            <input class="input100" type="password" name="password" required minlength="3">
                           
                        </div>
                        <span class="txt1 p-b-11">
                           Retype Password
                        </span>
                        <div class="wrap-input100 validate-input m-b-36" >
                          
                            <input class="input100" type="password" name="password_confirmation" required>
                           
                        </div>
                        @if($errors->has('password'))
                            <div class="error text-danger m-2">{{ $errors->first('password') }}</div>
                        @endif
                        <span class="txt1 p-b-11">
                            Mobile
                        </span>
                        <div class="wrap-input100 validate-input m-b-36" >
                          
                            {{-- <input class="input100" type="number" name="contact" required min="1" minlength="5">  --}}
                            <input class="input100" type='tel' name="contact" required  value="{{ old('contact') }}" placeholder="01xxxxxxxxx" minlength="8" required>
                           
                        </div>
                        @if($errors->has('contact'))
                        <div class="error text-danger m-2">{{ $errors->first('contact') }}</div>
                        @endif



                        <span class="txt1 p-b-11">
                            Birth Date
                        </span>
                        <div class="wrap-input100 validate-input m-b-36" >
                          
                      
                            <input id="datepicker" class="input100" type='tel' name="birthdate" required  value="{{ old('birthdate') }}" required >
                           
                        </div>

                        @if($errors->has('birthdate'))
                        <div class="error text-danger m-2">{{ $errors->first('birthdate') }}</div>
                        @endif
                        
                        
    
                        <div class="cbtn">
                            <button class="btn btn-outline-dark">
                                Login
                            </button>
                        </div>
    
                    </form>
                </div>
            </div>
        </div>
        
    </form>
        
    
    </body>
    
   <script src="{{ asset('js/app.js') }}" defer></script>

   <script src="{{ asset('js/jquery.js') }}" defer></script>

   <script src="{{ asset('js/datetime/datetime.js') }}"></script>
    <script src="{{ asset('js/datetime/gijgo.min.js') }}" type="text/javascript"></script>

   <script>
    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4',
        
        startDate: '-3d',
        format: 'yyyy-mm-dd',
    });
</script>

</html>
