<div class="row">

    
  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 card">
    <form method="POST" id="picuserid" action="{{ route('profile.updatepic',$user->id) }}" enctype="multipart/form-data"> 
        @csrf
        @method('PATCH')

        <div class="form-group ">
          <label for="piclocation">Profile Picture :</label>
          <input type="file" class="text-center form-control-file" id="piclocation" name="piclocation" accept='image/*' onchange="loadFile(event)" required>
      </div>

      @if($errors->has('piclocation'))
      <div class="error text-danger m-2">{{ $errors->first('piclocation') }}</div>
      @endif


      



  </div>

  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 card">
        

        



                        <div class="form-group text-center m-5">

                            <img id="output" class=" img-thumbnail p-2 " width="auto" height="auto" src="{{$user->piclocation}}" alt="No Image"  >

                        </div>

                   

                

               

          
                
              

          
    </div>

    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 card ">

     <div class="m-5 text-center">
      <button type="submit" class=" btn btn-outline-dark btn-block">UPLOAD</button>
     </div>
        
    

    </div>
    </form>

</div>


