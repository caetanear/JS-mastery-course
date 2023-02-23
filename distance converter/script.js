(function(){
    'use strict';

		document.getElementById('convert').addEventListener('submit', function(event){

			event.preventDefault();

			var distance = document.getElementById('distance').value;
			distance = parseFloat(distance);
			//or var distance = parseFloat(document getElementById('distance').value);
			var answer = document.getElementById('answer');


			//see if distance is a number
			if (distance){
				//convert and round the distance
				var conversion = (distance*1.609344).toFixed(3);
				//var roundedConversion = conversion.toFixed(3);

				//put the answer in the bottom div using innerHTML
				answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
			} else {
				//put an error message in the bottom div
				answer.innerHTML = '<h2>Please provide a number.</h2>';
			}

		}); 
})();

//this is an immediately invoked function expression