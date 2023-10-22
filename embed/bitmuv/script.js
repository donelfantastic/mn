function override(url) {
      if (url.indexOf("licensing.bitmovin.com/licensing") > -1)
        return "data:text/plain;charset=utf-8;base64,eyJzdGF0dXMiOiJncmFudGVkIiwibWVzc2FnZSI6IlRoZXJlIHlvdSBnby4ifQ==";
      if (url.indexOf("licensing.bitmovin.com/impression") > -1)
        return "data:text/plain;charset=utf-8;base64,eyJzdGF0dXMiOiJncmFudGVkIiwibWVzc2FnZSI6IlRoZXJlIHlvdSBnby4ifQ==";
      return url;
    }
    var opens = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
      var url = override(arguments[1]);
      arguments[1] = url;
      return opens.apply(this, arguments);
    }
/*
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
    progressive:      "//donelfantastic.github.io/live/ssportsNZ.m3u8",
    //dash: "",
    poster: "", 
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
*/
          
