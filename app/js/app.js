$(document).ready(function() {

	
	$('input:button').click(function(){
		var emporer = "";
		var picked = $('input:checked').val();
		//console.log("picked: " + picked);
		//check for first game
		if (game.current == 1) {
			if (who == picked) {
				//console.log("yay");
				updateScoreBoard(1, true);

				
			} else {
				//console.log('what were you thinking!');
				updateScoreBoard(0, false);
				
				
			}
		} else if (game.current <=7) {
			
			if (who == picked) {
			
				//console.log("yay");
				updateScoreBoard(1, true);
				
				//for last question
				if (game.current > 7) {
					$('input:button').val('reset');
					console.log(game.current);
					getScore();
				}

			} else {
				
				//console.log('what were you thinking!');
				updateScoreBoard(0, false);
				
				//for last question
				if (game.current > 7) {
					$('input:button').val('reset');
					console.log(game.current);
					getScore();
				}
				
			}
		} else {
			console.log("game over");
			init();
			return 'game over';
			
		} 


		//console.log(picked);
		
		//next quiz
		who =  nextQuiz(game.current);
		//console.log(who);
		
	}); 
	
	
});