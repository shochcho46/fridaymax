<nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark shadow">
    <a class="navbar-brand" href="{{ route('Home') }}">Friday Maxx</a>
    <button class="btn btn-link btn-md order-1 order-lg-0" id="sidebarToggle" href="#"> <i class="fas fa-bars"></i> </button>

    <!-- Navbar Search-->
    <ul class=" d-none d-md-block my-2  mx-auto">
      
            <a class="btn btn-outline-light btn-sm " href="{{ route('subscriptions.subscriplist') }}"> Subscription </a>
            
     
        
    </ul>
    <!-- Navbar-->

    <ul class="navbar-nav ml-auto ml-md-0 ">
        @guest   
            <li class="nav-item d-none d-md-block">
                <a class="btn btn-outline-light btn-sm m-2"  data-placement="bottom" title="Sign Up" href="{{ route('registration') }}"> Sing Up <i class="fas fa-user-plus"></i> </a>
                
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="btn btn-outline-light btn-sm m-2"  data-placement="bottom" title="Login" href="{{ route('login') }}"> Login <i class="fas fa-sign-in-alt"></i> </a>
                
            </li>
        @endguest

    @auth
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="{{ route('profile.load') }}">Profile Settings</a>

                @if((Auth::user()->type === "superadmin") || (Auth::user()->type === "admin") )
                <a class="dropdown-item" href="{{ route('admin.dashboard') }}">Admin Dashboard</a>
                @endif
               


                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="{{ route('logout') }}">Logout</a>
            </div>
        </li>
    @endauth   

    </ul>

</nav>