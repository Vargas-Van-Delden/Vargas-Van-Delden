//used for teasting
fetch("https://cloud-happy-fox.glitch.me/movies").then(resp => resp.json()).then(data => console.log(data))

// Variables
var toggle = $('#reload').toggleClass('loadingimage')
var addRating = document.getElementById("added-movie")
var addTitle = document.getElementById('submit-title');
var submitButton = document.querySelector('#submit-movie');

getList();

// function addEvents(){
// 	$('.deletethis').click( function (){
// 		console.log($(this).val());
// 		deleteMovie($(this).val());
// 	})
// }

function getList() {
    $('#reload').toggleClass('loadingimage')
    var movielist = document.getElementById('movielist');
    fetch("https://cloud-happy-fox.glitch.me/movies").then(resp => resp.json())
        .then(data => {
            let html = '';
            for (i = 0; i < data.length; i++) {
                html += `<h1>${data[i].title} </h1>`
                html += `<h3>${data[i].rating} </h3>`
                html += `<button name="Delete" class="deletethis" type="submit" value="${data[i].id}">Delete</button>`
            }
            movielist.innerHTML = html;
            // Delete Button - Event Listener
            $('.deletethis').click(function () {
                deleteMovie($(this).val());
            })
        })
        .then(() => $('#reload').toggleClass('loadingimage')
        )
};

// ADD Movie

function addMovie(m) {
    m.preventDefault();
    let movieObj = {
        title: addTitle.value,
        rating: addRating.value
    };

    // Fetch post to movies json
    fetch("https://cloud-happy-fox.glitch.me/movies", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
    }).then(() => fetch("https://cloud-happy-fox.glitch.me/movies")).then(resp => resp.json()).then(movies => console.log(movies));
    addTitle.value = ''; //resets typed value

}


// Delete Movie list
function deleteMovie(movieId) {
    fetch("https://cloud-happy-fox.glitch.me/movies/" + movieId, {
        method: "DELETE"
    }).then(() => fetch("https://cloud-happy-fox.glitch.me/movies")).then(resp => resp.json()).then(() => getList());
}

submitButton.addEventListener('click', addMovie);

// Todo
//  Refresh button for API when list edited
//  User edit movies attributes in real time
//  Allow user to remove movie from list
//  As we create the styling add delete button next to movie in list

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

