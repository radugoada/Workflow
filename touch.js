document.getElementById("id_logic_level_version").innerHTML="Business level version 2017.11.08.4";

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

canvas.addEventListener("touchstart", on_touch_start);

function generate_random_color()
{
    var litere ="0123456789ABCDEF";
    var color = "#";
    for(i = 0; i < 6; i++)
            color += litere[Math.floor(Math.random() * 16)];
    
    return color;
}

function on_touch_start(e)
{
    var rect = canvas.getBoundingClientRect();
    var touches = e.changedTouches;
    for (i = 0; i < e.changedTouches.length; i++)
    {
        context.beginPath();
        context.arc(touches[i].pageX, touches[i].pageY - rect.top, 10, 0, 2 * Math.PI);
        context.strokeStyle = generate_random_color();
        context.stroke();
    }
    
}