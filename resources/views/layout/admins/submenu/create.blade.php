@extends('layout.admins.main')

@section('content')
 <div class="container-fluid">
    <div class="mt-4 text-center">
        <h3>ADD SUB MENU </h3>
    </div>

    @if (session('success'))
    <div class="alert alert-success alert-dismissible fade show" id="message" role="alert">
        {{ session('success') }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    @endif

    <form method="POST" action="{{ route('submenus.store') }}">
        @csrf
        <div class="form-group">
          <label for="mainmenu_id">Slect Menu Name :</label>
          <select class="form-control" name="mainmenu_id" required>
            <option value="" selected disabled>Choose...</option>
            @foreach($mainmenu as  $value)

            <option class="p-2" value="{{ $value->id }}" > {{ $value->main_name }}</option>
            @endforeach

        </select>

        </div>

        @if($errors->has('mainmenu_id'))
            <div class="error text-danger m-2">{{ $errors->first('mainmenu_id') }}</div>
        @endif




        <div class="form-group">
          <label for="sub_name">Menu Name English :</label>
          <input type="text" class="form-control" id="sub_name" name="sub_name"  placeholder="Menu Name in English" value="{{ old('sub_name') }}"required>
        </div>

        @if($errors->has('sub_name'))
            <div class="error text-danger m-2">{{ $errors->first('sub_name') }}</div>
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

