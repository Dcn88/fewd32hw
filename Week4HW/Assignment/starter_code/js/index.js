
$(".relxr-header nav ul li a").click(function(event) {
	event.preventDefault();
});

$(".readmore a").click(function(event) {
	event.preventDefault();
});

$(".readless a").click(function(event) {
	event.preventDefault();
});

$(".learnmore").click(function(event) {
	event.preventDefault();
});


//Document Ready Function
$( document ).ready(function() {

$('.readmore').click(slideTextDown);

$('.readless').click(slideTextUp);

$('.readless').click(slideTextUp);

$('.learnmore').click(slideLearnDown);

//Click "Read More" & Slide Down
function slideTextDown() {

	$('.readmore').hide();
	$('#show-this-on-click').slideDown('slow',TextDownCallback);
};  

//"Show Read Less" After Text Appears
function TextDownCallback() {
	$('.readless').show();	
};

//Text Disappears When Click "Read Less"
function slideTextUp() {
	$('#show-this-on-click').slideUp('slow', TextUpCallback);

};

//Show "Read More" Icon
function TextUpCallback() {
	$('.readless').hide();
	$('.readmore').show();
};

//Show text after clicking "Learn More"
function slideLearnDown() {
	$('#learnmoretext').slideDown('slow');
	$('.learnmore').hide();
}

});