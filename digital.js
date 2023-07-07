const hourE1 = document.getElementById("hour")
const minuteE1 = document.getElementById("minute")
const secondE1 = document.getElementById("second")
const ampmE1 = document.getElementById("ampm")

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    var ampm = h>=12?"PM":"AM";

    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    h = h < 10?"0"+h:h
    m = m < 10?"0"+m:m
    s = s < 10?"0"+s:s

    hourE1.innerHTML = h;
    minuteE1.innerHTML = m;
    secondE1.innerHTML = s;
    ampm.innerHTML = ampm;

    setTimeout(() => {
        updateClock()
    }, 1000)
}

$(document).ready(function() {

    $("#custom").click(function() {
        $("#option").show();
    });

    $("#option").mouseleave(function() {
        $("#option").hide();
    });

    $("#bg1").click(function(){

        $("body").css("background", "#22235F"); 
        $(".text").css("background", "#7a4d95");
        
    });
        
    $("#bg2").click(function(){
        
        $("body").css("background", "#ce4420"); 
        $(".text").css("background", "#102030");
        
    });
        
    $("#bg3").click(function(){
        
        $("body").css("background", "#fca311"); 
        $(".text").css("background", "#14213d");
        
    });
        
    $("#bg4").click(function(){
        
        $("body").css("background", "blue"); 
        $(".text").css("background", "#fca311");
    
    });
        
    $("#bg5").click(function(){
        
        $("body").css("background", "cyan"); 
        $(".text").css("background", "#08a4a7");

    });

    $("#bg6").click(function(){

        $("body").css({"background":"url(https://img.freepik.com/free-photo/abstract-dark-background-with-flowing-colouful-waves_1048-13124.jpg)" ,"backgroun-repeat":"no-repeat", "background-size": "cover"}); 
        $(".text").css("backgroun", "#f66c3a"); 
        $("h1").css("color", "white") 

    });

    $("#bg7").click(function(){
        
        $("body").css({"background":"url(https://img.freepik.com/free-photo/abstract-smoke-wallpaper-background-desktop_53876-128249.jpg)" ,"backgroun-repeat":"no-repeat", "background-size": "cover"});
        $(".text").css("backgroun","#08a4a7"); 
        $("h1").css("color", "white")
        
    });
                
      
})

updateClock()