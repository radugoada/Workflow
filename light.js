window.addEventListener("devicelight", device_light);


function device_light(e){
    
   document.getElementById("id_light").innerHTML =
       "value = " + e.value + " max = " + e.max;
}