<div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark shadow" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
            <div class="nav">
                @auth <h6 class="text-center mt-3">{{ Auth::user()->name }}</h6> @endauth
                <div class="sb-sidenav-menu-heading">Subscribe</div>
                <a class="nav-link" href="{{ route('subscriptions.subscriplist') }}">
                    <div class="sb-nav-link-icon"><i class="fas fa-dollar-sign"></i></div>
                    Subscription
                </a>
               
               
                @auth
                <a class="nav-link" href="{{ route('paymentlist.index') }}">
                    <div class="sb-nav-link-icon"><i class="far fa-money-bill-alt"></i></div>
                    Payment List
                </a>

                @endauth
                
                <div class="sb-sidenav-menu-heading">Products</div>
                @php
                $menuid=array();
                $submenuid=array();
                @endphp

                @foreach($mainmenu as $mainvalue)




                @foreach($submenu as $subvalue)



                @if($mainvalue->id == $subvalue->mainmenu_id)

                @if(!(in_array($mainvalue->id, $menuid)))



                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#mainmenu{{ $subvalue->id  }}" aria-expanded="false" aria-controls="{{ $subvalue->id }}">
                    <div class="sb-nav-link-icon"><i class="fas fa-film"></i></div>
                    {{ $mainvalue->main_name }}
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>



                @foreach($submenu as $nsubvalue)

                @if($mainvalue->id == $nsubvalue->mainmenu_id)

                @if(!(in_array($nsubvalue->id, $submenuid)))

                <div class="collapse" id="mainmenu{{ $subvalue->id  }}" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                    <nav class="sb-sidenav-menu-nested nav">

                        <a class="nav-link" href="{{route('contents.content', [$mainvalue->id,$nsubvalue->id])}}">{{ $nsubvalue->sub_name }} </a>

                    </nav>
                </div>

                @endif

                @php
                array_push($submenuid,$nsubvalue->id);
                @endphp

                @endif


                @endforeach


                @php
                array_push($menuid,$mainvalue->id);
                @endphp



                @endif







                @endif




                @endforeach




                @if(!(in_array($mainvalue->id, $menuid)))

                @php
                array_push($menuid,$mainvalue->id);

                @endphp
                <a class="nav-link" href="{{route('contents.maincontent',$mainvalue->id)}}">
                    <div class="sb-nav-link-icon"><i class="fas fa-film"></i></div>
                    {{ $mainvalue->main_name }}
                </a>
                @endif


                @endforeach












                {{--  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
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
                </div>  --}}


                <div class="sb-sidenav-menu-heading">User</div>

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

                <a class="nav-link" href="{{ route('Play') }}">
                    <div class="sb-nav-link-icon"><i class="fas fa-sign-in-alt"></i></div>
                    Play Movie 
                </a>

            </div>
        </div>
        <div class="sb-sidenav-footer">
            <div class="small">Logged in as: </div>
            @guest Guest @endguest
            @auth {{ Auth::user()->name }} @endauth
        </div>
    </nav>
</div>
