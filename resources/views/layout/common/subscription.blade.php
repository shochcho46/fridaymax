@extends('layout.normal.main')

@section('css')
<link href="{{ asset('css/subpage.css') }}" rel="stylesheet">



@endsection

@section('content')

<div>
  <h3 class="text-center"> SUBSCRIPTION OPTIONS </h3>
</div>

<div class="mt-5">

 

    <div class="row">
      @foreach($subscribe as  $value)

     

     

      <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <a href="{{ route('addsubscriptions.subscribetion',$value->id) }}" class="linkUnLiRemove">
          <div class="subscrip p-4 shadow-lg text-center">
            <div>

            
            <h4><b> &#36; {{ $value->amount }} / {{ (int)($value->amount)*84 }} &#x9f3;</b></h4>
            <h5>Total {{ $value->screen }} screens</h5> 
            <h5>for {{ $value->day }} days.</h5> 
          </div>
          </div>
        </a>
      </div>

   
     
      
      @endforeach
    </div>


  
</div>




 @endsection


@section('script')


@endsection