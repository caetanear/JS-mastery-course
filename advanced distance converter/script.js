(function(){
    "use strict";

		let convertType = "miles";
		const heading = document.querySelector('h1');
		const intro = document.querySelector ('p');
		const answerDiv = document.getElementById('answer');
		const form = document.getElementById('convert');

		//handle keypress of K or M
		document.addEventListener('keydown', function(event){

			var key = event.code;
			
			if (key === 'KeyK'){
				//change the value of the converterType variable
				convertType = 'kilometers';

				//change the heading
				heading.innerHTML = "Kilometers to Miles Converter";

				//change the intro paragraph
				intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
			} else if (key === 'KeyM'){
				convertType = 'miles';

				heading.innerHTML = "Miles to Kilometers Converter";

				intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
			}
		});

		//handle submission of form & distance conversion
		form.addEventListener('submit', function(event){
			event.preventDefault();

			const distance = parseFloat(document.getElementById('distance').value);

			//check if distance is a number
			if (distance){
				//convert M to Km 1.609344
				if (convertType == "miles"){
					const converted = (distance*1.609344).toFixed(3);
					answerDiv.innerHTML = `${distance } miles converts to ${converted }  kilometers`;
				}
				//convert Km to M 0.621371192
				else {
					const converted = (distance*0.621371192).toFixed(3);
					answerDiv.innerHTML = `${distance } kilometers converts to ${converted } miles`;
				}
			} 
			else {
				answerDiv.innerHTML = "<h2>Please provide a number.</h2>";
			}
		});
})();

//this is an immediately invoked function expression