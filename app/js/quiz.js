



//create first quiz object instance
var who = emporerQuiz(
	"Sulla",
	"./img/emporers/sulla.svg", 
	"This Roman was a general and statesman.  He unconstitutionally marched his armies into Rome and defeated Marius in battle.  This action consequently paved the way for future emporers.",
	["Augustus", "Hadrian", "Sulla", "Julius"]
);

function emporerQuiz(emporer, emporerPath, quiz, multi) {

		//create new game for current emporer
		var newGame = gameQuiz;
		newGame.emporer = emporer;
		newGame.emporerPath = emporerPath;
		newGame.quiz = quiz;
		newGame.multi = multi;

		//fill out quiz form
		$('.emporer-icon img').attr('src', newGame.emporerPath);
		var t = document.createTextNode(newGame.quiz);
		$('section.question h2').html(t);

		//get how many items in multi array from game object
		var count = newGame.multi.length;
		//fillout the multi answer
		for (var i = 0; i<count; i++) {
			var t = document.createTextNode(newGame.multi[i]);
			var ans = i + 1;
			$('span#opt' + i).html(t);

			//fillout radio value and reset choice
			$('input#ans' + ans).val(newGame.multi[i]);
			$('input#ans' + ans).removeAttr('checked');
		}

		//return correct answer
		
		return newGame.emporer;

	};

function nextQuiz(next) {
		
		if (next == 2) {
			return emporerQuiz(
			"Augustus",
			"./img/emporers/Augustus.svg", 
			"The founder of the Roman Empire and its first Emperor, ruling from 27 BC until his death in 14 AD.  Together with Mark Antony and Marcus Lepidus, he formed the Second Triumvirate to defeat the assassins of Caesar.",
			["Augustus", "Hadrian", "Sulla", "Julius"]);

		} else if (next == 3) {
			return emporerQuiz(
			"Hadrian",
			"./img/emporers/Hadrian.svg", 
			"He rebuilt the Pantheon and constructed the Temple of Venus and Roma. He is also known for a wall, which marked the northern limit of Britannia.",
			["Pompey", "Julius", "Marcus", "Hadrian"]);
		} else if (next == 4) {
			return emporerQuiz(
			"Julius",
			"./img/emporers/Julius.svg",
			"A Roman general, statesman, Consul, and notable author of Latin prose. He played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire.",
			["Pompey", "Hadrian", "Julius", "Augustus"]);
		} else if (next == 5) {
			return emporerQuiz(
			"Marcus",
			"./img/emporers/Marcus.svg", 
			"The Roman Emperor from 161 to 180. He ruled with Lucius Verus as co-emperor from 161 until Verus' death in 169. He was the last of the Five Good Emperors, and is also considered one of the most important Stoic philosophers.",
			["Marcus", "Tiberius", "Sulla", "Pompey"]);
		} else if (next == 6) {
			return emporerQuiz(
			"Pompey",
			"./img/emporers/Pompey.svg", 
			"A military and political leader of the late Roman Republic. He came from a wealthy Italian provincial background, and his father had been the first to establish the family among the Roman nobility. Military success in Sulla's Second Civil War led him to adopt the nickname Magnus, \"the Great\". He was consul three times and celebrated three triumphs.",
			["Augustus", "Hadrian", "Pompey", "Julius"]);
		} else if (next == 7) {
			return emporerQuiz(
			"Tiberius",
			"./img/emporers/tiberius.svg", 
			"One of Rome's greatest generals; his conquest of Pannonia, Dalmatia, Raetia, and temporarily, parts of Germania laid the foundations for the northern frontier. But he came to be remembered as a dark, reclusive, and sombre ruler who never really desired to be emperor; Pliny the Elder called him tristissimus hominum, \"the gloomiest of men.\"",
			["Sulla", "Tiberius", "Hadrian", "Pompey"]);
		} else {
			
			return "game over";
		}
		
		
	}

