<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        
        <link href="http://amp.azure.net/libs/amp/latest/skins/amp-default/azuremediaplayer.min.css" rel="stylesheet">
       

        {{--  <link href="{{ asset('videojs/css/videojs-http-source-selector.css') }}" rel="stylesheet">  --}}

       

        <!-- Styles -->
        {{-- header('Content-Length: ' . $size); --}}
    <body class="">
       

        <video id="vid1" class="azuremediaplayer amp-default-skin" autoplay controls width="640" height="400" poster="poster.jpg" data-setup='{"nativeControlsForTouch": false}'>
            <source src="http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest" type="application/vnd.ms-sstr+xml" />
            <p class="amp-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video
            </p>
        </video>

       
    </body>

    {{--  <script src="{{ asset('videojs/js/video.min.js') }}" ></script>
    <script src="https://unpkg.com/@silvermine/videojs-quality-selector/dist/js/silvermine-videojs-quality-selector.min.js"></script>
    
    <script src="{{ asset('videojs/js/videojs-contrib-quality-levels.js') }}" ></script>
    <script src="{{ asset('videojs/js/videojs-http-source-selector.min.js') }}" ></script>
    <script src="{{ asset('videojs/js/customplayer.js') }}" ></script>
    <script src="{{ asset('videojs/js/videojs.hotkeys.min.js') }}" ></script>
    <script src="http://cdn.dashjs.org/latest/dash.all.min.js"></script>
    <script src="{{ asset('videojs/js/videojs-dash.min.js') }}" ></script>  --}}
    
    <script src= "http://amp.azure.net/libs/amp/latest/azuremediaplayer.min.js"></script>

    
</html>
