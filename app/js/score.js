




function updateScoreBoard(points, armorUp) {
	game.points = game.points + points;
	moveIcon(armorUp);
	getScore();
}

//preload image files
function preloadIconList (){};

preloadIconList(
		"./img/armor/gallic-f.svg", 
		"./img/armor/gallic-f-2.svg", 
		"./img/armor/gallic-f-3.svg", 
		"./img/armor/Centurion-White.svg", 
		"./img/armor/Centurion-Special-Command.svg",
		"./img/armor/Centurion-Special-Command-2.svg", 
		"./img/armor/Praetorian.svg", 
		"./img/armor/Praetorian-2.svg"
	);

function preloadIcon(list) {
		var iconImages = [];
		for (var i=0; i<list.arguments.length; i++) {
			iconImages[i] = new Image();
			iconImages[i].src = preloadIcon.arguments[i];
		}
}



function getScore() {
		$('#msg').text('You got ' + game.points + ' out of ' + game.questions);
	}

function moveIcon(correct) {
		var xPosition = game.xPosition + 5;
		var xPrevious = game.xPosition;
		xPrevious += "rem";
		game.xPosition = xPosition;
		var x = xPosition + "rem";

		if (correct) {
			$('.armor-icon').css('background-image','url(' + game.armor[game.points] +')');
		}


		$('.armor-icon').animate({left:x}, 1000, function(){
			$('.armor-icon').attr('left',x);

			if (correct) {
				var current = game.current - 1;
				console.log(current);

				$('.timeline').append('<span id="point'+ game.points +'" class="score"></span>');

				$('.timeline #point' + game.points).css('left', xPrevious);
				

			} else {
				console.log("not correct");
				
			}


		});

		game.current++;
	}

