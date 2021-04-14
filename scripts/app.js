var input = document.getElementById('input');
var button = document.getElementById('submit');
var name2 = document.getElementById('name');
var desc = document.getElementById('desc');
var temp = document.getElementById('temp');
var clouds = document.getElementById('humid');
var wind = document.getElementById('wind');
var clouds = document.getElementById('clouds');
var lon = document.getElementById('lon');
var lat = document.getElementById('lat');
var min = document.getElementById('min');
var max = document.getElementById('max');

const keyAPI = "76e164f273322bf3d8e1287f78a4ca24";
let allEntries = [];

button.addEventListener("click", displayInfo);

function displayInfo(){
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+keyAPI+'&units=imperial')
	.then(response => response.json())
	.then(data => {
		// set variables from API
		var cityName = data['name'];
		var temp2 = data['main']['temp'];
		var desc2 = data['weather'][0]['description'];

		var humid2 = data['main']['humidity'];
		var wind2 = data['wind']['speed'];
		var clouds2 = data['clouds']['all'];
		var lon2 = data['coord']['lon'];
		var lat2 = data['coord']['lat'];
		var min2 = data['main']['temp_min'];
		var max2 = data['main']['temp_max'];

		// Local Storage
		let submission = input.value;
		allEntries.push(submission);
		localStorage.setItem("Submissions", allEntries); 


		// Display All Info
		name2.innerHTML = cityName;
		temp.innerHTML = temp2 + " °F";
		desc.innerHTML = "Description: " + desc2;
		humid.innerHTML = "Humidity: " + humid2;
		clouds.innerHTML = "Clouds: "+ clouds2;
		lon.innerHTML = "Longitude: " + lon2;
		lat.innerHTML = "Latitude: "+ lat2;
		min.innerHTML = "Min: " + min2 + " °F";;
		max.innerHTML = "Max: "+ max2 + " °F";;
	})
.catch(err => alert("Invalid submission"));

}