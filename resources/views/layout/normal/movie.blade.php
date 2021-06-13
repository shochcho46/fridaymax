@extends('layout.normal.main')

@section('css')
@php
$size = filesize('movie/The Dark Knight Rises (2012)/file.mp4');


$mimes = "audio/mp4";
header('Accept-Ranges: bytes');
header('Content-Length: *');
header('Content-Range: bytes 0 - '.($size - 1).'/'.$size);




@endphp


<link href="{{ asset('videojs/css/video.css') }}" rel="stylesheet">

{{-- <link href="https://vjs.zencdn.net/7.8.4/video-js.css" rel="stylesheet" /> --}}
{{-- header('Content-Range: bytes 0 -'.($size - 1).'/'.$size); --}}
{{-- header('Content-Type: '.$mimes); --}}
{{-- header('Content-Length: ' . $size); --}}

@endsection

@section('content')


  <video
  id="my-player"
  class="video-js vjs-default-skin vjs-big-play-centered"
  
  width="944"
  height="531"
  poster="{{ asset('movie/The Dark Knight Rises (2012)/poster.jpg') }}"



  data-setup="{}"
>
{{-- <source src="{{ route('Play') }}" type="video/mp4" /> --}}
<source src="{{ route('Play') }}" type='video/mp4' label='SD' res='480' />
<source src="{{ route('Play') }}" type='video/mp4' label='HD' res='1080'/>
<source src="{{ route('Play') }}" type='video/mp4' label='phone' res='144'/>
<source src="{{ route('Play') }}" type='video/mp4' label='4k' res='2160'/>

  
  <track kind="captions" src="{{ asset('movie/The Dark Knight Rises (2012)/subtitel.vtt') }}" srclang="en" label="English">

  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="https://videojs.com/html5-video-support/" target="_blank"
      >supports HTML5 video</a
    >
  </p>
</video>


@php

@endphp


 @endsection


@section('script')

<script src="{{ asset('videojs/js/video.min.js') }}" ></script>
<script src="{{ asset('videojs/js/customplayer.js') }}" ></script>
<script src="{{ asset('videojs/js/videojs.hotkeys.min.js') }}" ></script>
{{-- <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script> --}}

@endsection