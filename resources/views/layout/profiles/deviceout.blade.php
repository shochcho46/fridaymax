

       <div class="container">

        @if (session('success'))
        <div class="alert alert-danger alert-dismissible fade show" id="devicemessage" role="alert">
            {{ session('success') }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        @endif

        <div class="row">
            




            

            @foreach($screenlist as  $value)

            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5">

                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title text-center">Details</h5>

                    <h6>IP Address : {{ $value->ipaddress }}</h6>
                    <h6>Device Type : {{ $value->device }}</h6>
                    <h6>Browser Name : {{ $value->browser }}</h6>
                    <h6>Operating System : {{ $value->os }}</h6>
                    <h6>Last Login : {{ $value->updated_at }}</h6>
                    
                    {{-- <a href="{{ route('device.logout',$value->id) }}" class="btn btn-danger">Remove</a> --}}


                    <a class="btn btn-danger"  href="{{ route('device.logout',$value->id) }}" onclick="event.preventDefault(); document.getElementById('del{{$value->id}}').submit();">
                        Remove  <i class="far fa-trash-alt"></i> 
                    </a>



                    

                    <form method="POST" id="del{{$value->id}}" action="{{ route('device.logout', $value->id) }}" style="display: none;">
                        @csrf
                        @method('DELETE')


                    </form>





                    </div>
                
                </div>

            </div>
            @endforeach

           
            
            




        </div>
                
       

       

      </div>

   
       
      



