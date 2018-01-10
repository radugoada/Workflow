var d = new Date();

document.getElementById("id_logic_level_version").innerHTML="Business level version" + d.getFullYear() + "." + d.getMonth() + "." + d.getDate() + ".4";

var constraints = {audio:false, video:{facingMode:"environment"}};
navigator.mediaDevices.getUserMedia(constraints).then(on_success).catch(on_error);


var video = document.getElementById("id_video");
video.addEventListener("touchstart", snap);
video.addEventListener("mousedown", snap);

function on_success(stream)
{
    video.srcObject = stream;
}

function on_error(error)
{
    alert("Error");
}

function snap()
{
    var canvas = document.getElementById("id_canvas");
    var context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, 640, 480);
    
}

function download{
    
var my_image = canvas.toDataURL("image/png");
windows.location.href = my_image;
}