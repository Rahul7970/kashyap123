function time(params) {
    var time =new Date();
    var hrs =time.getHours();
    var min =time.getMinutes();
    var sec =time.getSeconds();
    var session =document.getElementById('session');
     
    if(hrs >=12){
        session.innerHTML ='PM'

    }else{
        session.innerHTML ='AM';
    }
    if(hrs > 12){
        hrs =hrs - 12;
    }
    document.getElementById('hours').innerHTML =hrs;
    document.getElementById('minutes').innerHTML =min;
    document.getElementById('second').innerHTML= sec;

    // randomColor();
}

setInterval(
    function (randomColor) {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#"+randomColor;
    },1000);
 

setInterval(time, 10);

