// loader;
// $('#reload').addClass('loadingimage')
fetch("https://cloud-happy-fox.glitch.me/movies").then(resp => resp.json()).then(data => console.log(data))

var toggle = $('#reload').toggleClass('loadingimage')
var addRating = document.getElementById("added-movie")
var addTitle = document.getElementById('submit-title');
var submitButton = document.querySelector('#submit-movie');


$('#reload').click(function () {
	getList()
})

function getList() {
	$('#reload').toggleClass('loadingimage')
	var movielist = document.getElementById('movielist');
// .then(data => lastcommit.innerText = ('Date of last commit: ' + data[0].commit.author.date))
	fetch("https://cloud-happy-fox.glitch.me/movies").then(resp => resp.json())
		.then(data => {
			let html = '';
			for (i = 0; i < data.length; i++) {
				html += `<h1>${data[i].title} </h1>`
				html += `<h3>${data[i].rating} </h3>`
			}
			movielist.innerHTML = html;
		})
		.then(() => $('#reload').toggleClass('loadingimage')
		)
}
// ADD Movie


function addMovie(m) {
	m.preventDefault();
	let movieObj = {
	// 	id: coffees.length + 1,
		title: addTitle.value,
		rating: addRating.value
	};
	// Fetch post to movies json
	data.push(movieObj);
	// Display add coffees
	// dbody.innerHTML = renderCoffees(coffees);
	// localStorage.setItem(coffeeObj.id.toString(), JSON.stringify(coffeeObj)); //key(id): "coffeeObj"
	JSON.parse(window.localStorage.getItem(coffeeObj.id.toString()));
	addTitle.value = ''; //resets typed value
}
submitButton.addEventListener('click', addMovie);

// Todo
//  Refresh button for API when list edited
//  User edit movies attributes in real time
//  Allow user to remove movie from list

// getList();

// HOW TO GET
// fetch("https://vast-organic-farm.glitch.me/movies").then(resp => resp.json()).then(data => console.log(data)); // get all
// fetch("https://vast-organic-farm.glitch.me/movies/3").then(resp => resp.json()).then(data => console.log(data)); // get one

// HOW TO POST
// const newMovie = {
//     title: "Dr. Dolittle"
// };
// fetch("https://vast-organic-farm.glitch.me/movies", {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newMovie),
// }).then(() => fetch("https://vast-organic-farm.glitch.me/movies")).then(resp => resp.json()).then(movies => console.log(movies));

// HOW TO UPDATE
// const complexMovie = {
//     title: "Be Kind Rewind",
//     director: "Michael Gondry",
//     release_date: 2008,
//     cast: ["Yasiin Bey", "Jack Black", "Danny Glover"]
// };
//
// const edittedMovie = {
//     title: "The Never-Ending Story"
// }

// fetch("https://vast-organic-farm.glitch.me/movies/7", {
//     method: "PUT",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(edittedMovie)
// }).then(() => fetch("https://vast-organic-farm.glitch.me/movies")).then(resp => resp.json()).then(movies => console.log(movies));

// fetch("https://vast-organic-farm.glitch.me/movies/7", {
//     method: "PATCH",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(edittedMovie)
// }).then(() => fetch("https://vast-organic-farm.glitch.me/movies")).then(resp => resp.json()).then(movies => console.log(movies));

// HOW TO DELETE
// fetch("https://vast-organic-farm.glitch.me/movies/7", {
//     method: "DELETE"
// }).then(() => fetch("https://vast-organic-farm.glitch.me/movies")).then(resp => resp.json()).then(movies => console.log(movies));

