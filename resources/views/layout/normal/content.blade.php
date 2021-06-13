@extends('layout.normal.main')

@section('css')

<link href="{{ asset('css/subpage.css') }}" rel="stylesheet">



@endsection

@section('content')
 <div class="container-fluid">
    
   <div class="mt-5">

    @if(!empty($subcontent))
    <h1> This is the page for {{ $content->main_name }} and you click {{ $subcontent->sub_name }} </h1>
      
    @endif

   
    
    @if(empty($subcontent))
    <h1> This is the page for {{ $content->main_name }}</h1>
      
    @endif

   </div>

 </div>





@endsection

@section('script')

@endsection