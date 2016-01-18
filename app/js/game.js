



//create game object literal and set up properties for first quiz
var game = {
	armor: ["./img/armor/gallic-f.svg", "./img/armor/gallic-f-2.svg", "./img/armor/gallic-f-3.svg", "./img/armor/Centurion-White.svg", "./img/armor/Centurion-Special-Command.svg","./img/armor/Centurion-Special-Command-2.svg", "./img/armor/Praetorian.svg", "./img/armor/Praetorian-2.svg"],
	xPosition: 0,
	questions: 7,
	current: 1,
	points: 0
};

//create quiz object literal
var gameQuiz = {
	emporer: "",
	emporerPath : "",
	quiz: "",
	multi : []
};


//initialize function object
function init() {

	
	game.xPosition = 0;
	game.current = 1;
	game.points = 0;

	$('input:button').val('conquer');
	$('#msg').text('');

	who = emporerQuiz(
		"Sulla",
		"./img/emporers/sulla.svg", 
		"This Roman was a general and statesman.  He unconstitutionally marched his armies into Rome and defeated Marius in battle.  This action consequently paved the way for future emporers.",
		["Augustus", "Hadrian", "Sulla", "Julius"]);

		$('.timeline').html('<div class="armor-icon"></div><img src="img/time.png"><br><p class="left">BCE</p><p class="right">CE</p>');
}


