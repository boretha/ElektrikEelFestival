 //DROPDOWN DESKTOP MENU
    
$(".dropbtn").attr("href", "javascript:void(0);");
    
    
                    //DROPDOWN BURGER MENU
    
$("#burger").attr("href", "javascript:void(0);");
$("#burger").click(function(event) {
  var menu = document.getElementById("menu_mobile");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
})
    
      
                    //TIMER          
                          
var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;

var countDown = new Date('Nov 21, 2021 00:00:00').getTime();
var x = setInterval(function() {    
    var now = new Date().getTime();
    var distance = countDown - now;
    
    $("#days").text(Math.floor(distance / (day)));
    $("#hours").text(Math.floor((distance % (day)) / (hour)));
    $("#minutes").text(Math.floor((distance % (hour)) / (minute)));
    $("#seconds").text(Math.floor((distance % (minute)) / second));
    
}, second);
