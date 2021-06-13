<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        
        <link href="{{ asset('videojs/css/video.css') }}" rel="stylesheet">
        <link href="{{ asset('videojs/css/controlbar.css') }}" rel="stylesheet">
        <link href="{{ asset('videojs/css/tomorrow.min.css') }}" rel="stylesheet">

        <style>
            video {
                width: 100%;
            }
    
            .dash-video-player {
                position: relative;  /* This position relative is needed to position the menus */
                width: 640px;
                margin: 0 auto;
            }
        </style>
        <!-- Styles -->
        {{-- header('Content-Length: ' . $size); --}}
    <body onload="startVideo()">
       
        {{--  <video id=my-player width=600 height=300 class="video-js vjs-default-skin" controls></video>  --}}


        <div class="dash-video-player ">
            <!-- HTML structure needed for the ControlBar -->
            <div class="videoContainer" id="videoContainer">
                <video preload="auto"  autoplay="" > </video>
                <div id="track"></div>
                <div id="videoController" class="video-controller unselectable">
                    <div id="playPauseBtn" class="btn-play-pause" title="Play/Pause">
                        <span id="iconPlayPause" class="icon-play"></span>
                    </div>
                    <span id="videoTime" class="time-display">00:00:00</span>
                    <div id="fullscreenBtn" class="btn-fullscreen control-icon-layout" title="Fullscreen">
                        <span class="icon-fullscreen-enter"></span>
                    </div>
                    <div id="bitrateListBtn" class="control-icon-layout" title="Bitrate List">
                        <span class="icon-bitrate"></span>
                    </div>
                    <input type="range" id="volumebar" class="volumebar" value="1" min="0" max="1" step=".01">
                    <div id="muteBtn" class="btn-mute control-icon-layout" title="Mute">
                        <span id="iconMute" class="icon-mute-off"></span>
                    </div>
                    <div id="trackSwitchBtn" class="control-icon-layout" title="A/V Tracks">
                        <span class="icon-tracks"></span>
                    </div>
                    <div id="captionBtn" class="btn-caption control-icon-layout" title="Closed Caption">
                        <span class="icon-caption"></span>
                    </div>
                    <span id="videoDuration" class="duration-display">00:00:00</span>
                    <div class="seekContainer">
                        <div id="seekbar" class="seekbar seekbar-complete">
                            <div id="seekbar-buffer" class="seekbar seekbar-buffer"></div>
                            <div id="seekbar-play" class="seekbar seekbar-play"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


       
    </body>

    {{--  <script src="{{ asset('videojs/js/video.min.js') }}" ></script>  --}}
    <script src="http://cdn.dashjs.org/latest/dash.all.min.js"></script>
    {{--  <script src="{{ asset('videojs/js/videojs-dash.min.js') }}" ></script>  --}}
    <script src="{{ asset('videojs/js/dplayercustom.js') }}" ></script>
    {{--  <script src="{{ asset('videojs/js/videojs.hotkeys.min.js') }}" ></script>  --}}
    <script src="{{ asset('videojs/js/ControlBar.js') }}" ></script>
    <script src="{{ asset('videojs/js/highlight.min.js') }}" ></script>

    <script>
       

        function startVideo() {
            const url = "{{ asset('movie/mpd/dark.mpd') }}";
            var videoElement = document.querySelector(".videoContainer video");
            TTMLRenderingDiv = document.querySelector("#track");

            var player = dashjs.MediaPlayer().create();
            player.initialize(videoElement, url, true);
            player.setTextDefaultEnabled(true);
            player.attachTTMLRenderingDiv(TTMLRenderingDiv);
            var controlbar = new ControlBar(player);
            controlbar.initialize();
        }
        </script>
    {{--  <script>
        var player = videojs('my-player');
        
        player.ready(function() {
          player.src({
            src: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
            type: 'application/dash+xml'
          });
        
          player.play();
        });

        function startVideo() {
            const url = 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd';
            var videoElement = document.querySelector(".videoContainer video");
    
            var player = dashjs.MediaPlayer().create();
            player.initialize(videoElement, url, true);
            var controlbar = new ControlBar(player);
            controlbar.initialize();
        }
        </script>  --}}

</html>
