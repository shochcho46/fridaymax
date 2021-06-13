@extends('layout.admins.main')



@section('content')

 <div class="container">

    <div class="mt-4 text-center">
        <h3>ADD USER</h3>
    </div>

    @if (session('success'))
    <div class="alert alert-success alert-dismissible fade show" id="usermessage" role="alert">
        {{ session('success') }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    @endif

    <div class="card">
        <div class="card-body">
            <form method="POST" id="userid" action="{{ route('users.store') }}" enctype="multipart/form-data">
                @csrf

                <div class="form-group">
                    <label for="name">Name :</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Name" value="{{ old('name') }}" required minlength="3">
                  </div>
                  @if($errors->has('name'))
                  <div class="error text-danger m-2">{{ $errors->first('name') }}</div>
                  @endif


                <div class="form-group">
                    <label for="News Catagory">User Type :</label>
                    <select class="form-control" name="type" required>
                        <option value="" selected disabled>Choose...</option>


                        <option class="p-2" value="superadmin" > SUPERADMIN</option>
                        <option class="p-2" value="subadmin" > SUBADMIN</option>


                    </select>
                </div>

                <div class="form-group">
                  <label for="email">Email :</label>
                  <input type="email" class="form-control" id="email" name="email"  placeholder="abc@xyz.com" value="{{ old('email') }}" required >
                </div>

                @if($errors->has('email'))
                    <div class="error text-danger m-2">{{ $errors->first('email') }}</div>
                @endif

                <div class="form-group">
                  <label for="password">Password :</label>
                  <input type="password" class="form-control" id="password" name="password"  placeholder="password" value="{{ old('password') }}" required >
                </div>

                @if($errors->has('password'))
                    <div class="error text-danger m-2">{{ $errors->first('password') }}</div>
                @endif

                <div class="form-group">
                  <label for="password_confirmation">Password Confirmation:</label>
                  <input type="password" class="form-control" id="password_confirmation" name="password_confirmation"  placeholder="confirm password" value="{{ old('password_confirmation') }}" required >
                </div>

                @if($errors->has('password_confirmation'))
                    <div class="error text-danger m-2">{{ $errors->first('password_confirmation') }}</div>
                @endif


                <div class="form-group">
                  <label for="Mobile">Mobile :</label>
                  <input type="tel" class="form-control" id="contact" name="contact" placeholder="01xxxxxxxxx" minlength="6"  placeholder="abc@xyz.com"  required >
                </div>

                @if($errors->has('contact'))
                    <div class="error text-danger m-2">{{ $errors->first('contact') }}</div>
                @endif






                <div class="form-group text-center">
                    <button type="submit" class="btn btn-outline-dark ">Submit</button>
                </div>

              </form>



        </div>
    </div>





 </div>





@endsection


@section('script')


<script type="text/javascript">
 $(document).ready(function() {
    $("#usermessage").delay(1000).hide(500);
    });
</script>


@endsection


