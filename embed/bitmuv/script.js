//BITMUV
const currentLocation = window.location.search;
const sURL = currentLocation.replace("?live&url=", "");

var container = document.getElementById("my-player");
var config = {
  key: "c6d7e091-e62e-4bda-819f-99bb13506fba",
  playback: {
    muted: false,
    autoplay: false,
    preferredTech: [
      {
        player: "html5",
        streaming: "Dash"
      },
      {
        player: "html5",
        streaming: "hls"
      },
      {
        player: "html5",
        streaming: "smooth"
      },
      {
        player: "native",
        streaming: "hls"
      },
      {
        player: "native",
        streaming: "progressive"
      }
    ]
  },
  source: {
    progressive: sURL,
    poster: "//rawcdn.githack.com/donelfantastic/donelfantastic.github.io/main/assets/dftv.gif"
  }
};

var player = bitmovin.player("my-player");

player.setup(config).then(
  function (value) {
    // Success
    console.log("Successfully created bitmovin player instance");
  },
  function (reason) {
    // Error!
    console.log("Error while creating bitmovin player instance");
  }
);