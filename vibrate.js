
document.addEventListener("touchstart", start_timer);
document.addEventListener("touchend", stop_timer);

var timer_id;

function start_timer()
{
   timer_id = setInterval(vibrate, 200);
    
}

function stop_timer()
{
    window.navigator.vibrate(0);
    clearInterval(timer_id);
    
}

function vibrate()
{
    window.navigator.vibrate(300);
}
