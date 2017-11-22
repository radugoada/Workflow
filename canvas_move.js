document.getElementById("id_logic_level_version").innerHTML="Business level version 2017.11.15.4";

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");
var rect_canvas = canvas.getBoundingClientRect();
var img = document.getElementById("id_img");

var top_x = 100;
var top_y = 100;

var img_width = 200;
var img_height = 200;

img.onload = function(){
	context.drawImage(img, top_x, top_y, img_width, img_height);
	var rect_img = img.getBoundingClientRect();
}


canvas.addEventListener("touchmove", on_touch_move);

//-----------------------------------------------
function on_touch_move(e)

{
	e.preventDefault();
	var touches = e.changedTouches;

	for (var i = 0; i < touches.length; i++){
		if (touches[i].pageX < top_x + img_width && touches[i].pageX >= top_x && touches[i].pageY < top_y + img_width && touches[i].pageY >= top_y) {
            context.clearRect(0, 0, 800, 600);
            top_x = touches[i].pageX - rect_canvas.left;
            top_y = touches[i].pageY - rect_canvas.top;
            context.drawImage(img, top_x, top_y, img_width, img_height);
        }

	}

}

//-----------------------------------------------