function on() {
    document.getElementById("overlay").style.display = "block";
    
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
    var iframes = document.getElementsByTagName("iframe");
    if (iframes != null) {
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].src = iframes[i].src; //causes a reload so it stops playing, music, video, etc.
    }
}
  }
  