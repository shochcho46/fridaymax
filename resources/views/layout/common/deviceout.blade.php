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

        @if (session('success'))
        <div class="alert alert-danger alert-dismissible fade show" id="message" role="alert">
            {{ session('success') }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        @endif

        <div class="row">
            




            

            @foreach($screenlist as  $value)

            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5">

                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title text-center">Details</h5>

                    <h6>IP Address : {{ $value->ipaddress }}</h6>
                    <h6>Device Type : {{ $value->device }}</h6>
                    <h6>Browser Name : {{ $value->browser }}</h6>
                    <h6>Operating System : {{ $value->os }}</h6>
                    <h6>Last Login : {{ $value->updated_at }}</h6>
                    
                    {{-- <a href="{{ route('device.logout',$value->id) }}" class="btn btn-danger">Remove</a> --}}


                    <a class="btn btn-danger"  href="{{ route('device.logout',$value->id) }}" onclick="event.preventDefault(); document.getElementById('del{{$value->id}}').submit();">
                        Remove  <i class="far fa-trash-alt"></i> 
                    </a>



                    

                    <form method="POST" id="del{{$value->id}}" action="{{ route('device.logout', $value->id) }}" style="display: none;">
                        @csrf
                        @method('DELETE')


                    </form>





                    </div>
                
                </div>

            </div>
            @endforeach

           
            
            




        </div>
                
       

        <div class="mt-5">
            <h1>
             <a class="btn btn-block btn-outline-dark" href="{{ route('register.index') }}">Goto To Home</a>   
            </h1>
        </div>

      </div>

   
       
    </body>

   <script src="{{ asset('js/app.js') }}" defer></script>

   <script src="{{ asset('js/jquery.js') }}" defer></script>



   <script src="{{ asset('fontawesome/js/all.js') }}" defer></script>
   
   
   



</html>



