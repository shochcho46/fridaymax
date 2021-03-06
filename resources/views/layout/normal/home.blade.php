@extends('layout.normal.main')

@section('css')

<link href="{{ asset('css/subpage.css') }}" rel="stylesheet">



@endsection

@section('content')
 <div class="container-fluid">
    
   <div class="mt-5">


    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="{{ asset('picture/sliderpic/1.jpg') }}" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="{{ asset('picture/sliderpic/2.jpg') }}" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="{{ asset('picture/sliderpic/3.jpg') }}" alt="Third slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="{{ asset('picture/sliderpic/4.jpg') }}" alt="Third slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="{{ asset('picture/sliderpic/5.jpg') }}" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

   </div>

 </div>





@endsection

@section('script')

@endsection