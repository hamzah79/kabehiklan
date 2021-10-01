var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "{best|good|amazing}-{tool|generator}";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds Code";
  }
  timeleft -= 1;
}, 1000);
