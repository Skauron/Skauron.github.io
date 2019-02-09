function changeVideo(link){
    var vid = document.getElementById("video-portafolio");
    document.getElementById("SourceVideo").src = link;
    vid.load();
}

function move() {
    var elem = document.getElementById("Progress");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }