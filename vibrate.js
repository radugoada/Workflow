var d = new Date();

document.getElementById("id_logic_level_version").innerHTML="Business level version" + d.getFullYear() + "." + d.getMonth() + "." + d.getDate() + ".1";

document.getEventListener("touchstart", vibrate);


function vibrate()
{
    window.navigator.vibrate(200);
}
