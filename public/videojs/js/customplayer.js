var player = videojs('my-player', {
    controls: true,
    autoplay: false,
    responsive: true,
    aspectRatio: '16:9',
    preload: 'auto',
    playbackRates: [0.25, 0.50, 1, 1.25, 1.5, 2, 2.5],
    html5: {
        hls: {
            overrideNative: true, // add this line
        }
    },


});

videojs('my-player').ready(function() {
    this.hotkeys({
        volumeStep: 0.1,
        seekStep: 5,
        enableModifiersForNumbers: false
    });
});



// src: 'https://bitmovin-a.akamaihd.net/content/sintel/sintel.mpd',
//src: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd',
// var player = videojs('my-player');

// player.ready(function() {
//     player.src({
//         src: "{{asset('movie/m3u8/dark.m3u8')}}",

//         type: 'application/dash+xml'
//     });

//     player.play();



// });