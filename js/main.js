$(document).ready(function(){

	console.log(window.innerWidth + " " + window.innerHeight);

	$('.slider-hoteles').slick({
		prevArrow: ('.nav-prev'),
		nextArrow: ('.nav-next'),
	});
});