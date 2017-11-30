var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playlists = {
  mcu: 'PL9mxgTZQwOFXGAVWdsxoZSGv3gnwr1cEb',
  xmas: 'PLug2hRCycLDkDoppom1hjPO0tPc4T_shr',
  chineseOpera: 'PL32647390F8A5309F'
};


var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    // height: '360',
    // width: '640',
    allowsInlineMediaPlayback: true,
    playerVars: {
      listType: 'playlist',
      list: playlists.mcu,
      // autoplays the video
      autoplay: 1,
      // display controls on player
      controls: 0,
      // video annotations off
      iv_load_policy: 3,
      // looping entire playlist
      loop: 1,
      // removing youtube branding
      modestbranding: 1,
      // do not show related videos on pause/stop
      rel: 0,
      // do not show video info
      showinfo: 0,
      // does not play full screen on start
      playsinline: 1,
      // allow js api control
      enablejsapi: 1
    },
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('prev').addEventListener('click', function() {
    player.previousVideo();
  })

  document.getElementById('play').addEventListener('click', function() {
    if (player.getPlayerState() == 2 || player.getPlayerState() == 0) {
      player.playVideo();
    } else {
      player.pauseVideo()
    }
  })

  document.getElementById('next').addEventListener('click', function() {
    player.nextVideo();
  })


  // shuffle button
  // document.getElementById('shuffle').addEventListener('click', function() {
  //   player.setShuffle({shufflePlaylist: true});
  // })

  // future feature: change playlists on client side 

});
