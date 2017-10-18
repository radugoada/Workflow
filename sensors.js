window.addEventListener('deviceorientation', ondeviceorientation);

function ondeviceorientation(event) {

    document.getElementById("id_alpha").innerHTML = Math.round(event.alpha * 100) / 100;
    document.getElementById("id_beta").innerHTML = Math.round(event.beta * 100) / 100;
    document.getElementById("id_gamma").innerHTML = Math.round(event.gamma * 100) / 100;

}
