
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video', {
    width: 750,
    height: 500,
    videoId: 'GQ5tsvYjHME',
    playerVars: {
      autoplay: 1, 
      controls: 0 
    },
  });
}
$('.w-video .list-group-item').on('click', function () {
  var url = $(this).attr('data-video-id');
  player.cueVideoById(url);
  console.log(url)

});