@extends('layout.admins.main')

@section('content')
 <div class="container-fluid">
    <div class="mt-4 text-center">
        <h3>EDIT MAIN MENU </h3>
    </div>



    <form method="POST" action="{{ route('submenus.update',$data->id) }}">
    
        @csrf
       
        @method('PUT')

        <div class="form-group">
          <label for="mainmenu_id">Slect Menu Name :</label>
          <select class="form-control" name="mainmenu_id" required>
            <option value="" selected disabled>Choose...</option>
            @foreach($mainmenu as  $value)
            @if($value->id == $data->mainmenu_id)

            <option class="p-2" selected value="{{ $value->id }}">
              {{ $value->main_name }} 
            </option>
            @else
             <option class="p-2" value="{{ $value->id }}">
               {{ $value->main_name }} 
              </option>
             @endif

            @endforeach

        </select>

        </div>

        @if($errors->has('mainmenu_id'))
            <div class="error text-danger m-2">{{ $errors->first('mainmenu_id') }}</div>
        @endif








        <div class="form-group">
          <label for="sub_name">Menu Name English :</label>
          <input type="text" class="form-control"  id="sub_name" name="sub_name"  placeholder="Menu Name in English" value="{{ old('sub_name') ?? $data->sub_name }}"required>
        </div>

        @if($errors->has('sub_name'))
            <div class="error text-danger m-2">{{ $errors->first('sub_name') }}</div>
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



