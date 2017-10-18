window.addEventListener('deviceorientation', ondeviceorientation);

function ondeviceorientation(event) {

    document.getElementById("id_alpha").innerHTML = event.alpha;
    document.getElementById("id_beta").innerHTML = event.beta;
    document.getElementById("id_gamma").innerHTML = event.gamma;

}
