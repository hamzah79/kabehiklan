var timeleft = 100;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "COBACOBA5566";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds Code";
  }
  timeleft -= 1;
}, 1000);
