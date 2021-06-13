@extends('layout.admins.main')

@section('content')
 <div class="container-fluid">
    <div class="mt-4 text-center">
        <h3>Add Subscription</h3>
    </div>

    @if (session('success'))
    <div class="alert alert-success alert-dismissible fade show" id="message" role="alert">
        {{ session('success') }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    @endif

    <form method="POST" action="{{ route('subscrips.store') }}">
        @csrf
        <div class="form-group">
          <label for="day">Total Days :</label>
          <input type="text" class="form-control" id="day" name="day"  placeholder="Total Days" value="{{ old('day') }}"required>
        </div>

        @if($errors->has('day'))
            <div class="error text-danger m-2">{{ $errors->first('day') }}</div>
        @endif
        
        <div class="form-group">
          <label for="screen">Total Screen:</label>
          <input type="number" class="form-control" id="screen" name="screen" placeholder="Total Screen" value="{{ old('screen') }}" required min="1">
        </div>
        @if($errors->has('screen'))
        <div class="error text-danger m-2">{{ $errors->first('screen') }}</div>
        @endif


        <div class="form-group">
          <label for="amount">Total Money:</label>
          <input type="number" class="form-control" id="amount" name="amount" placeholder="Total Money" value="{{ old('amount') }}" required min="1">
        </div>
        @if($errors->has('amount'))
        <div class="error text-danger m-2">{{ $errors->first('amount') }}</div>
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

