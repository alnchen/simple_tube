setTimeout(function() {
  // player.getOptions('captions');
  // player.unloadModule("captions");
  // player.unloadModule("cc")

  document.getElementById('prev').addEventListener('click', function() {
    player.previousVideo();
  })

  document.getElementById('play').addEventListener('click', function() {
    if (player.getPlayerState() !== 1) {
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
}, 1000)
