@extends('layout.admins.main')

@section('content')


<div class="container-fluid">
  <div class="container">

  
    <div class="row shadow-lg">

      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6  p-3">
        <img id="output" class=" img-thumbnail p-2 " width="auto" height="auto" src="{{$userdetails->piclocation}}" alt="No Image"  >
      </div>

      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6  p-3">
        <h6>Name : {{ $userdetails->name }}</h6>
        <h6>Email : {{ $userdetails->email }}</h6>
        <h6>Mobile : {{ $userdetails->contact }}</h6>
        <h6>Date of Birth : {{ $userdetails->birthdate }}</h6>
        <h6>User type : {{ $userdetails->type }}</h6>
      </div>

    </div>
  </div>

  <h2 class="text-center mt-5">Total Subscribtions </h2>

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
           
            @endforeach
         </tbody>
      </table>
     
  </div>

  <div class="text-center pagination ">
    
    {{ $paymentlist->links() }}

 </div>

 <h2 class="text-center mt-5">Login Details </h2>


 <div class="table-responsive m-3">
  <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
         <th scope="col">IP Address</th>
          <th scope="col">Device Type</th>
          <th scope="col">Browser Name</th>
          <th scope="col">Operating System</th>
          <th scope="col">Last Login</th>
          
        </tr>
      </thead>
      <tbody>
          @foreach($screenlist as $key => $value)
          <tr>
               <td >{{ 1 + $key }}</td>

             
              <td>{{ $value->ipaddress }}</td>
              <td>{{ $value->device}}</td>
              <td>{{ $value->browser }}</td>
              <td>{{ $value->os }}</td>
              <td>{{ $value->updated_at }}</td>
             
             
          </tr>
         
          @endforeach
       </tbody>
    </table>
   
</div>

<div>


@endsection


