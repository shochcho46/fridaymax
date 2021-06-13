@extends('layout.admins.main')

@section('content')
 <div class="container-fluid">
    <div class="mt-4 text-center">
        <h3>ADD MAIN MENU </h3>
    </div>

    @if (session('success'))
    <div class="alert alert-success alert-dismissible fade show" id="message" role="alert">
        {{ session('success') }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    @endif

    <form method="POST" action="{{ route('mainmenus.store') }}">
        @csrf
        <div class="form-group">
          <label for="main_name">Menu Name English :</label>
          <input type="text" class="form-control" id="main_name" name="main_name"  placeholder="Menu Name in English" value="{{ old('main_name') }}"required>
        </div>

        @if($errors->has('main_name'))
            <div class="error text-danger m-2">{{ $errors->first('main_name') }}</div>
        @endif
        
        <div class="form-group">
          <label for="serial">Serial:</label>
          <input type="number" class="form-control" id="serial" name="serial" placeholder="Serial" value="{{ old('serial') }}" required min="1">
        </div>
        @if($errors->has('serial'))
        <div class="error text-danger m-2">{{ $errors->first('serial') }}</div>
        @endif

        <div class="form-group text-center">
            <button type="submit" class="btn btn-outline-dark">Submit</button>
        </div>



      </form>



 </div>





@endsection

@section('script')
<script type="text/javascript">
 $(document).ready(function() {
    $("#message").delay(1000).hide(500);
    });
</script>
@endsection

