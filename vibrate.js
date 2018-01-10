
document.addEventListener("touchstart", vibrate);


function vibrate()
{
    window.navigator.vibrate([200, 200, 500, 200, 1000]);
}
