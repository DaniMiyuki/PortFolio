$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrolly > 20){
            $('header').addClass("sticky");
           
        }
        else {
            $('header').removeClass("sticky");
            
        }
    });
});


const mytime = new Date().getHours();
let show = 0

if (mytime < 12) {
    show ="Good Morning!!! Welcome to Kanayama's PortFolio";
}
else if (mytime < 18) {
    show = "Good Afternoon!!! Welcome to Kanayama's PortFolio";
}
else {
    show = "Good Evening!!! Welcome to Kanayama's PortFolio";
}
let x = document.getElementById("timer");

x.innerHTML=show

