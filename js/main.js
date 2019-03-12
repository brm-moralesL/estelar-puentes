$(document).ready(function(){

	console.log(window.innerWidth + " " + window.innerHeight);

	$('.slider-hoteles').slick({
		prevArrow: ('.nav-prev'),
		nextArrow: ('.nav-next'),
	});

	$('.slide-fest').slick({
		prevArrow: ('.nav-fest-der'),
		nextArrow: ('.nav-fest-izq'),
	});

	$('.slider-lista-cuidades').slick({
		prevArrow: ('.nav-cuidades-der'),
		nextArrow: ('.nav-cuidades-izq'),
	});

});