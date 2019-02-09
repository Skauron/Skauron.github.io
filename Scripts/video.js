function changeVideo(link){
    var vid = document.getElementById("video-portafolio");
    document.getElementById("SourceVideo").src = link;
    vid.load();
}