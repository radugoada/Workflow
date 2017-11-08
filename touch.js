document.getElementById("id_logic_level_version").innerHTML="Business level version 2017.11.08.0";

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

window.addEventListener("touchstart", on_touch_start);

function on_touch_start(e)
{
    var touches = e.changedTouches;
    for (i = 0; i < e.changedTouches.lenght; i++){
        context.beginPath();
        context.arc(touches[i].pageX, touches[i].pageY, 10, 0, Math.PI);
        context.stroke();
    }
    
}