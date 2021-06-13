@extends('layout.normal.main')

@section('css')
<link href="{{ asset('css/subpage.css') }}" rel="stylesheet">


@yield('css')


@endsection

@section('content')


<div class="container-fluid">

  <div class="m-5">
    @if (session('save'))
    <div class="alert alert-success alert-dismissible fade show" id="message" role="alert">
        {{ session('save') }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    @endif

  </div>

  <div class="m-5">
    @if (session('picerror'))
    <div class="alert alert-danger alert-dismissible fade show" id="picmessage" role="alert">
        {{ session('picerror') }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    @endif

  </div>



<div class="mt-4 mb-4">
  <h2 class="text-center">
    Profile Picture
  </h2>
  <div class="profilecontent">
    
    @include('layout.profiles.profilepic') 

  </div>

</div>

<div class="mt-4 mb-4">
  <h2 class="text-center">
    Personal Information
  </h2>
  <div class="profilecontent">
    
    @include('layout.profiles.profileitem') 

  </div>

</div>


<div class="mt-4 mb-4">
  <h2 class="text-center">
    Total Login Device Details
  <div class="">
    
    @include('layout.profiles.deviceout') 

  </div>

</div>




</div>

@endsection

@section('script')

<script src="{{ asset('js/jquery.js') }}"></script>



<script type="text/javascript">
  $(document).ready(function() {
      $("#message").delay(3000).hide(500);
  });
</script>

  <script type="text/javascript">
    $(document).ready(function() {
        $("#failmessage").delay(3000).hide(500);
    });
  
  </script>

  <script type="text/javascript">
    $(document).ready(function() {
        $("#devicemessage").delay(3000).hide(500);
    });
  
  </script>

  <script type="text/javascript">
    $(document).ready(function() {
        $("#picmessage").delay(3000).hide(500);
    });
  
  </script>

  <script type="text/javascript">
    var loadFile = function(event) {
   var output = document.getElementById('output');
   output.src = URL.createObjectURL(event.target.files[0]);
   output.onload = function() {
     URL.revokeObjectURL(output.src) // free memory
   }
 };

</script>

@endsection
