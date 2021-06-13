
<div class="container-fluid">



    <div class="row">

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            @if (session('fail'))
            <div class="alert alert-danger alert-dismissible fade show" id="failmessage" role="alert">
                {{ session('fail') }}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
             @endif

            <div class="card">
                <div class="card-body">
                    <form method="POST" id="userid" action="{{ route('profile.updateitem',$user->id) }}" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')

                    <div class="form-group">
                        <label for="name">Name :</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Name" value="{{ old('name') ?? $user->name }}" required minlength="3">
                    </div>
                    @if($errors->has('name'))
                    <div class="error text-danger m-2">{{ $errors->first('name') }}</div>
                    @endif



                    <div class="form-group">
                        <label for="email">Email :</label>
                        <input type="email" class="form-control" id="email" name="email" value="{{ $user->email }}" readonly>
                    </div>

                    @if($errors->has('email'))
                    <div class="error text-danger m-2">{{ $errors->first('email') }}</div>
                    @endif


                    <div class="form-group">
                        <label for="type">User Type :</label>
                        <input type="type" class="form-control" id="type" name="type" value="{{ $user->type }}" readonly>
                    </div>

                    @if($errors->has('type'))
                    <div class="error text-danger m-2">{{ $errors->first('type') }}</div>
                    @endif

                    <div class="form-group">
                        <label for="Old Password">Old Password :</label>
                        <input type="password" class="form-control" id="oldpassword" name="oldpassword" placeholder="oldpassword" value="{{ old('oldpassword') }}" required>
                    </div>

                    @if($errors->has('oldpassword'))
                    <div class="error text-danger m-2">{{ $errors->first('oldpassword') }}</div>
                    @endif

                    <div class="form-group">
                        <label for="password">New Password :</label>
                        <input type="password" class="form-control" id="password" name="password" placeholder="password" value="{{ old('password') }}" required>
                    </div>

                    @if($errors->has('password'))
                    <div class="error text-danger m-2">{{ $errors->first('password') }}</div>
                    @endif

                    <div class="form-group">
                        <label for="password_confirmation">Password Confirmation:</label>
                        <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="confirm password" value="{{ old('password_confirmation') }}" required>
                    </div>

                    @if($errors->has('password_confirmation'))
                    <div class="error text-danger m-2">{{ $errors->first('password_confirmation') }}</div>
                    @endif


                    <div class="form-group">
                        <label for="contact"> Mobile :</label>
                        
                        <input class="form-control" id="contact" type='tel' name="contact" required  value="{{ old('contact') ?? $user->contact}}" placeholder="01xxxxxxxxx" minlength="8" required>
                    </div>
                    @if($errors->has('contact'))
                    <div class="error text-danger m-2">{{ $errors->first('contact') }}</div>
                    @endif



                    <div class="form-group">
                        <label for="birthdate"> Birth Date :</label>
                        
                        <input class="form-control" id="datepicker" type='tel' name="birthdate"  value="{{ old('birthdate') ?? $user->birthdate}}" placeholder="DD/MM/YYYY"  required>
                    </div>
                    @if($errors->has('birthdate'))
                    <div class="error text-danger m-2">{{ $errors->first('birthdate') }}</div>
                    @endif





                    <div class="form-group text-center">
                        <button type="submit" class="btn btn-outline-dark ">Submit</button>
                    </div>

                    </form>



                </div>
            </div>


        </div>


    </div>
</div>

