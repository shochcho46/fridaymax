@extends('layout.admins.main')

@section('content')
 <div class="container-fluid">
    <div class="mt-4 text-center">
        <h3>EDIT SUBSCRIPTION  </h3>
    </div>



    <form method="POST" action="{{ route('subscrips.update',$data->id) }}">
    
        @csrf
       
        @method('PUT')

        

        <div class="form-group">
          <label for="day">Menu Name English :</label>
          <input type="text" class="form-control"  id="day" name="day"  placeholder="Menu Name in English" value="{{ old('day') ?? $data->day }}"required>
        </div>

        @if($errors->has('day'))
            <div class="error text-danger m-2">{{ $errors->first('day') }}</div>
        @endif


     

        <div class="form-group">
          <label for="screen">Total Screen:</label>
          <input type="number" class="form-control" id="screen" name="screen" placeholder="Total Screen:" value="{{ old('screen') ?? $data->screen}}" required min="1">
        </div>
        @if($errors->has('screen'))
        <div class="error text-danger m-2">{{ $errors->first('screen') }}</div>
        @endif


        <div class="form-group">
          <label for="amount">Total Money:</label>
          <input type="number" class="form-control" id="amount" name="amount" placeholder="amount" value="{{ old('amount') ?? $data->amount}}" required min="1">
        </div>
        @if($errors->has('amount'))
        <div class="error text-danger m-2">{{ $errors->first('amount') }}</div>
        @endif

        <div class="form-group text-center">
          <button type="submit" class="btn btn-outline-dark">Update</button>
      </div>




      </form>



 </div>





@endsection



