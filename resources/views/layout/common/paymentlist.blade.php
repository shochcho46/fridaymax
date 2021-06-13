@extends('layout.normal.main')

@section('css')
<link href="{{ asset('css/subpage.css') }}" rel="stylesheet">



@endsection

@section('content')


<div class="container-fluid">
   @php
   $i=1
   @endphp
    <br>
 <h4 class="text-center mt-2">Payment List</h4>

 @if (session('success'))
    <div class="alert alert-danger alert-dismissible fade show" id="message" role="alert">
        {{ session('success') }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    @endif
 @if (session('update'))
    <div class="alert alert-success alert-dismissible fade show" id="updatemessage" role="alert">
        {{ session('update') }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    @endif

 <div class="table-responsive m-3">
    <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            
            <th scope="col"> Name</th>
           
            <th scope="col">Total Days</th>
            <th scope="col">Total Money</th>
            <th scope="col">Total Screen</th>
            <th scope="col">Transaction Id</th>
            <th scope="col">Payment Method</th>
            <th scope="col"> Payment Status</th>
            <th scope="col">Time</th>

          </tr>
        </thead>
        <tbody>
            @foreach($paymentlist as $key => $value)
            <tr>
                 <td >{{ $paymentlist->firstItem() + $key }}</td>

               
                <td>{{ $value->user->name }}</td>
                <td>{{ $value->subscribe->day }}</td>
                <td>{{ $value->amount }}</td>
                <td>{{ $value->subscribe->screen }}</td>
                <td>{{ $value->tranid }}</td>
                <td>{{ $value->method }}</td>
                <td>{{ $value->payment }}</td>
                <td>{{ $value->created_at }}</td>
                
               
                

               
            </tr>
            @php
             $i=$i+1;
            @endphp
            @endforeach
         </tbody>
      </table>
     
  </div>
     
<div>
  <div class="text-center pagination ">
    
    {{ $paymentlist->links() }}

</div>

@endsection

@section('script')

@endsection
