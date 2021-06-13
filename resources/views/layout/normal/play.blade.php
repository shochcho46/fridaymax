
@extends('layout.normal.main')


@section('css')

<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        
<link href="{{ asset('videojs/css/video.css') }}" rel="stylesheet">
<link href="{{ asset('videojs/css/videojs-seek-buttons.css') }}" rel="stylesheet">


<link href="{{ asset('videojs/css/videojs-http-source-selector.css') }}" rel="stylesheet">




@endsection

@section('content')

<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 ">
    {{--  <video id=my-player  width=800 height=450 class="video-js vjs-default-skin vjs-big-play-centered" controls></video>  --}}

    <video id=my-player   class="video-js vjs-default-skin vjs-big-play-centered" controls></video>
  </div>

  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 ">

  </div>

  
</div>



@endsection

    

@section('script')

<script src="{{ asset('videojs/js/video.min.js') }}" ></script>
    
    <script src="{{ asset('videojs/js/videojs-seek-buttons.min.js') }}" ></script>
    <script src="{{ asset('videojs/js/videojs-brand.min.js') }}" ></script>
    
    <script src="{{ asset('videojs/js/videojs-contrib-quality-levels.js') }}" ></script>
 
    <script src="{{ asset('videojs/js/videojs-hls-quality-selector.js') }}" ></script>
    <script src="{{ asset('videojs/js/customplayer.js') }}" ></script>
    <script src="{{ asset('videojs/js/videojs.hotkeys.min.js') }}" ></script>
    
    


   
    <script>
      player.ready(function() {
        player.src({
            
          src: "{{asset('movie/m3u8/darknight/dark.m3u8')}}",
    
            type: 'application/x-mpegURL',
           
            
        });
    
        player.play();
       
        
        
        player.hlsQualitySelector({
          displayCurrentQuality: true,
      });
    
      player.seekButtons({
        forward: 10,
        back: 10
      });

      {{--  hide brand logo  --}}

      {{--  player.brand({
        image: "{{asset('logo/logo.png')}}",
        title: "Logo Title",
        destination: "http://www.brainchildbd.xyz/",
        destinationTarget: "_blank"
      });  --}}
     
    
    });
    </script>

@endsection