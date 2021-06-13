@extends('layout.admins.main')



@section('content')

 <div class="container">

    <div class="mt-4 text-center">
        <h3>EDIT USER</h3>
    </div>

    @if (session('success'))
    <div class="alert alert-success alert-dismissible fade show" id="message" role="alert">
        {{ session('success') }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    @endif

    <div class="card">
        <div class="card-body">
            <form method="POST" id="userid" action="{{ route('users.update',$user->id) }}" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="form-group">
                    <label for="name">Name :</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Name" value="{{ old('name') ?? $user->name }}" required minlength="3">
                  </div>
                  @if($errors->has('name'))
                  <div class="error text-danger m-2">{{ $errors->first('name') }}</div>
                  @endif

                  @php
                  $type =  Auth::user()->type
                  @endphp

                  @if(Auth::user()->type == "superadmin")
                    <div class="form-group">
                        <label for="News Catagory">User Type :</label>
                        <select class="form-control" name="type" required>
                            <option value="" selected disabled>Choose...</option>


                            <option class="p-2" value="superadmin" > SUPERADMIN</option>
                            <option class="p-2" value="subadmin" > SUBADMIN</option>


                        </select>
                    </div>
                @endif
                <div class="form-group">
                  <label for="email">Email :</label>
                  <input type="email" class="form-control" id="email" name="email"  placeholder="abc@xyz.com" value="{{ old('email') ?? $user->email}}" required >
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
    $("#message").delay(1000).hide(500);
    });
</script>

<script type="text/javascript">
	initSample();
</script>
@endsection


