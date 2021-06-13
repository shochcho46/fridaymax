@extends('layout.admins.main')

@section('content')
 <div class="container-fluid">
    <div class="mt-4 text-center">
        <h3>EDIT MAIN MENU </h3>
    </div>



    <form method="POST" action="{{ route('mainmenus.update',$data->id) }}">
    
        @csrf
       
        @method('PUT')
        <div class="form-group">
          <label for="main_name">Menu Name English :</label>
          <input type="text" class="form-control"  id="main_name" name="main_name"  placeholder="Menu Name in English" value="{{ old('main_name') ?? $data->main_name }}"required>
        </div>

        @if($errors->has('main_name'))
            <div class="error text-danger m-2">{{ $errors->first('main_name') }}</div>
        @endif


     

        <div class="form-group">
          <label for="serial">Serial:</label>
          <input type="number" class="form-control" id="serial" name="serial" placeholder="Serial" value="{{ old('order') ?? $data->serial}}" required min="1">
        </div>
        @if($errors->has('serial'))
        <div class="error text-danger m-2">{{ $errors->first('serial') }}</div>
        @endif

        <div class="form-group text-center">
          <button type="submit" class="btn btn-outline-dark">Update</button>
      </div>




      </form>



 </div>





@endsection



