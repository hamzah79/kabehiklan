var timeleft = 100;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("bottom").innerHTML = "NYIRAM-BOT6647";
  } else {
    document.getElementById("bottom").innerHTML = timeleft + " seconds Code";
  }
  timeleft -= 1;
}, 1000);
