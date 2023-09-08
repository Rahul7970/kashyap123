var clock = document.getElementById('clock');
var color = document.getElementById('hex-color');

function hexclock(){
  
  var time = new Date();
  var hours = (time.getHours() % 12).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();
  
  if(hours.length < 2) {
    
    hours = '0' + hours;
  }
  
  if(minutes.length < 2) {
    
    minutes = '0' + minutes;
  }
  
    if(seconds.length < 2) {
    
    seconds = '0' + seconds;
  }
  
  var clockString = hours + ' : ' + minutes + ' : ' + seconds; 
  var hexColorString = "#" + hours + minutes + seconds;
  
  clock.textContent = clockString;
  color.textContent = hexColorString;
  
  document.body.style.backgroundColor = hexColorString;
}

setInterval(hexclock, 1000);