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
        <link href="{{ asset('css/custom.css') }}" rel="stylesheet">
       
        <link href="{{ asset('css/materialdesignicons.min.css') }}" rel="stylesheet">
    
       
        
    
        
    </head>


    <body>

       <div class="container">

        <div class="row">
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">

            </div>




            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5">




                <div class="card" style="">
                    <div class="card-body">
                    <h5 class="card-title text-center text-danger">Total Number of Screen Exit</h5>
                    
                    <p class="card-text">Dear {{ Auth::user()->name }} you have reached your maximum number of screen by login with multiple devices. Your total number of screen is more than you have subscribed. So, please logout form other devices or subscribe to a new subscribtion plan. </p>
                   
                    <a href="{{ route('device.list') }}" class="btn btn-danger">Logut form Other Devices</a>
                    </div>
                </div>

            </div>

            



            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">

            </div>

        </div>
                
       



      </div>

   
       
    </body>

   <script src="{{ asset('js/app.js') }}" defer></script>

   <script src="{{ asset('js/jquery.js') }}" defer></script>



   <script src="{{ asset('fontawesome/js/all.js') }}" defer></script>
   
   
   



</html>
