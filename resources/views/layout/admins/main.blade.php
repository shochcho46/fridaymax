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
        <link href="{{ asset('admin/css/styles.css') }}" rel="stylesheet">
        <link href="{{ asset('css/materialdesignicons.min.css') }}" rel="stylesheet">
    
        @yield('css')
        
    
        
    </head>


    <body class="sb-nav-fixed">
        @include('layout.admins.headbar')

        <div id="layoutSidenav">

            @include('layout.admins.sidebar')

            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-1">

                            </div>
                            <div class="col-10 mt-2">
                                
                                <form>
                                    <div class="form-row">
                                      <div class="col-11">
                                        <input type="text" class="form-control" placeholder="First name">
                                      </div>
                                      <div class="col-1">
                                        <button class="btn btn-outline-dark" type="button"> <i class="fas fa-search"></i> </button>
                                      </div>
                                    </div>
                                  </form>

                            </div>
                            <div class="col-1">

                            </div>

                        </div>
                       <div class="mt-3">
                        @yield('content')
                       </div>
                        
                    </div>

                </main>

                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2020</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            
            
            </div>

        </div>
       
    </body>

   <script src="{{ asset('js/app.js') }}" defer></script>
   {{--  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>  --}}

   <script src="{{ asset('js/jquery.js') }}" ></script>


   <script src="{{ asset('admin/js/scripts.js') }}" defer></script>
   <script src="{{ asset('fontawesome/js/all.js') }}" defer></script>
   
   
   
   @yield('script')


</html>
