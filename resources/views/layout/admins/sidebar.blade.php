<div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark shadow" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
            <div class="nav">
                @auth <h6 class="text-center mt-3">{{ Auth::user()->name }}</h6> @endauth 


{{--  subscribe   --}}
                <div class="sb-sidenav-menu-heading">Core</div>
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#subscrib" aria-expanded="false" aria-controls="subscrib">
                    <div class="sb-nav-link-icon"><i class="fas fa-dollar-sign"></i></div>
                    Subscription
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>
                <div class="collapse" id="subscrib" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                    <nav class="sb-sidenav-menu-nested nav">
                        <a class="nav-link" href="{{ route('subscrips.create') }}">add option</a>
                        <a class="nav-link" href="{{ route('subscrips.index') }}">option list</a>
                    </nav>
                </div>



{{-- Main Menu --}}
@if(Auth::user()->type == "superadmin" )
                <div class="sb-sidenav-menu-heading">Menus</div>
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                    <div class="sb-nav-link-icon"><i class="fas fa-bars"></i></div>
                    Main Menus
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>
                <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                    <nav class="sb-sidenav-menu-nested nav">
                        <a class="nav-link" href="{{ route('mainmenus.create') }}">add menu</a>
                        <a class="nav-link" href="{{ route('mainmenus.index') }}">menu list</a>
                    </nav>
                </div>

 {{-- Sub Menu  --}}

               
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#submenu" aria-expanded="false" aria-controls="submenu">
                    <div class="sb-nav-link-icon"><i class="fas fa-bars"></i></div>
                    Sub Menus
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>
                <div class="collapse" id="submenu" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                    <nav class="sb-sidenav-menu-nested nav">
                        <a class="nav-link" href="{{ route('submenus.create') }}">add submenu</a>
                        <a class="nav-link" href="{{ route('submenus.index') }}">submenu list</a>
                    </nav>
                </div>
@endif




                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                    <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                    Pages
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>
                <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                    <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                            Authentication
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="login.html">Login</a>
                                <a class="nav-link" href="register.html">Register</a>
                                <a class="nav-link" href="password.html">Forgot Password</a>
                            </nav>
                        </div>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                            Error
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="401.html">401 Page</a>
                                <a class="nav-link" href="404.html">404 Page</a>
                                <a class="nav-link" href="500.html">500 Page</a>
                            </nav>
                        </div>
                    </nav>
                </div>
                <div class="sb-sidenav-menu-heading">Addons</div>
                <a class="nav-link" href="charts.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                    Charts
                </a>
                <a class="nav-link" href="tables.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                    Tables
                </a>

                 {{-- USER LIST --}}

                <div class="sb-sidenav-menu-heading">User</div>
                @php
                    $normal = "normal";
                    $admin= "subadmin";
                @endphp

                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#user" aria-expanded="false" aria-controls="user">
                    <div class="sb-nav-link-icon"><i class="fas fa-users"></i></div>
                    User List
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>
                <div class="collapse" id="user" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                    <nav class="sb-sidenav-menu-nested nav">
                        @if(Auth::user()->type == "superadmin" )
                            <a class="nav-link" href="{{ route('users.create') }}">add user</a>
                        @endif
                        <a class="nav-link" href="{{ route('users.index') }}">all user</a>
                        <a class="nav-link" href="{{ route('users.type',$normal) }}">normal user list</a>
                        <a class="nav-link" href="{{ route('users.type',$admin) }}">admin user list</a>
                    </nav>
                </div>
               

                @guest

                    <a class="nav-link" href="{{ route('registration') }}">
                        <div class="sb-nav-link-icon"><i class="fas fa-user-plus"></i></div>
                        Sing Up
                    </a>
                    <a class="nav-link" href="{{ route('login') }}">
                        <div class="sb-nav-link-icon"><i class="fas fa-sign-in-alt"></i></div>
                        Log In
                    </a>

                @endguest

                @auth

                <a class="nav-link" href="{{ route('logout') }}">
                    <div class="sb-nav-link-icon"><i class="fas fa-sign-in-alt"></i></div>
                    Log Out
                </a>

                @endauth 

            </div>
        </div>
        <div class="sb-sidenav-footer">
            <div class="small">Logged in as:  </div>
            @guest Guest  @endguest
            @auth {{ Auth::user()->name }} @endauth 
        </div>
    </nav>
</div>