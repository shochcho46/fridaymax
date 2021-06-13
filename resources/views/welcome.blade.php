<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        
        <link href="{{ asset('videojs/css/video.css') }}" rel="stylesheet">
        <link href="{{ asset('videojs/css/videojs-seek-buttons.css') }}" rel="stylesheet">
        

        <link href="{{ asset('videojs/css/videojs-http-source-selector.css') }}" rel="stylesheet">

       

        <!-- Styles -->
        {{-- header('Content-Length: ' . $size); --}}
    <body class="">
       

      <video id=my-player  width=600 height=300 class="video-js vjs-default-skin vjs-big-play-centered" controls></video>
      
   

       
    </body>

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
    
            type: 'application/x-mpegURL'
        });
    
        player.play();
        
        player.hlsQualitySelector({
          displayCurrentQuality: true,
      });
    
      player.seekButtons({
        forward: 10,
        back: 10
      });

      player.brand({
        image: "{{asset('logo/logo.png')}}",
        title: "Logo Title",
        destination: "http://www.brainchildbd.xyz/",
        destinationTarget: "_blank"
      });
     
    
    });
    </script>
    
</html>
