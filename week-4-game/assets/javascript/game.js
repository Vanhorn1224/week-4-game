$(document).ready(function() {
	var random = Math.floor(Math.random() * 31 + 19)

	$('#randomNumber').text(random);

	var num1 = Math.floor(Math.random()*11+1)
	var num2 = Math.floor(Math.random()*11+1)
	var num3 = Math.floor(Math.random()*11+1)
	var num4 = Math.floor(Math.random()*11+1)

	var totalScore = 0;
	var wins = 0;
	var losses = 0;

	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);

	function reset() {
		random=Math.floor(Math.random() * 31 + 19);
		$('#randomNumber').text(random);
		var num1 = Math.floor(Math.random()*11+1);
		var num2 = Math.floor(Math.random()*11+1);
		var num3 = Math.floor(Math.random()*11+1);
		var num4 = Math.floor(Math.random()*11+1);
		totalScore = 0;
		$('finalScore').text(totalScore);
	}

	function youWin () {
		alert('You Win!');
		wins++;
		$('#numberWins').text(wins);
		reset();
	}

	function youLose () {
		alert('You Lose!');
		losses++;
		$('#numberLosses').text(losses);
		reset();
	}

	$("#greenGem").on("click", function() {
		totalScore = totalScore + num1;
		$("#finalScore").text(totalScore);
			if (totalScore == random) {
				youWin();
			}
			else if (totalScore > random) {
				youLose();
			}
	});

	$("#redGem").on("click", function() {
		totalScore = totalScore + num2;
		$("#finalScore").text(totalScore);
			if (totalScore == random) {
				youWin();
			}
			else if (totalScore > random) {
				youLose();
			}
	});

	$("#blueGem").on("click", function() {
		totalScore = totalScore + num3;
		$("#finalScore").text(totalScore);
			if (totalScore == random) {
				youWin();
			}
			else if (totalScore > random) {
				youLose();
			}
	});

	$("#purpleGem").on("click", function() {
		totalScore = totalScore + num4;
		$("#finalScore").text(totalScore);
			if (totalScore == random) {
				youWin();
			}
			else if (totalScore > random) {
				youLose();
			}
	});
});