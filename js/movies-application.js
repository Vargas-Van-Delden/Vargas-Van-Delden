// Variables
let toggle = $('#reload').toggleClass('hidden')
let addRating = document.getElementById("added-movie")
let addTitle = document.getElementById('submit-title');
let submitButton = document.querySelector('#submit-movie');
let filterMovie = document.querySelector("#movielist");
// Call Function getList to display movie list
getList();


// Set up the html using JQuery
function getList() {
    // Displays loading image
	$('#reload').toggleClass('hidden')

	let movielist = document.getElementById('movielist');
	fetch("https://woolen-sepia-verbena.glitch.me/movies").then(resp => resp.json())
		.then(data => {
			let html = '';
			for (i = 0; i < data.length; i++) {
				html += `<div class="container col-sm-3">`
				html += `<h2>${data[i].title} </h2>`
				html += `<h5>${data[i].rating}</h5>`
				html += `<button name="SaveChanges" class="saveThis hidden container-fluid" type="submit" value="${data[i].id}">Save Changes</button>`
				html += `<button name="Edit" class="editThis container-fluid" type="submit" value="${data[i].id}">Edit Details</button>`
				html += `<button name="Delete" class="deletethis container-fluid" type="submit" value="${data[i].id}">Delete Movie</button>`
				html += `</div>`
			}
			movielist.innerHTML = html;

			// Delete Button - Event Listener
			$('.deletethis').click(function () {
				deleteMovie($(this).val());
			})

			// Edit Button
			$('.editThis').click(function () {
				let editId = ($(this).val());
				let title = $(this).parent().children('h2').first().html()
				let rating = $(this).parent().children('h5').first().html()
				$(this).parent().children('.saveThis').toggleClass('hidden')
				$(this).toggleClass('hidden')
				$(this).parent().children('h2').first().html(`<input type='text' value='${title}' class="editarea container-fluid">`);
				$(this).parent().children('h5').first().html(editRating(rating));

                // Save Changes Button
				$(".saveThis").click(function () {
					let titleArea = $('.editarea').val();
					let selectedRating = $("#selector").val();
					editMovie(editId, titleArea, selectedRating);
				});

                // Edit Movie (Title) save changes on enter
				$(".editarea").keyup(function (event) {
					let keyStroke = event.key;
					if (keyStroke === 'Enter') {
						let textarea = $(this).val();
						let selectedRating = $("#selector").val();
						console.log(selectedRating);
						editMovie(editId, textarea, selectedRating);
					}

				});
                // Edit Movie (Rating) save changes on enter
				$(".ratingArea").keyup(function (event) {
					let keyStroke = event.key;
					if (keyStroke === 'Enter') {
						let titleArea = $('.editarea').val();
						let selectedRating = $("#selector").val();
						editMovie(editId, titleArea, selectedRating);
					}
				});
			})
		})
        // Hides loading image after movies displayed
		.then(() => $('#reload').toggleClass('hidden')
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
	fetch("https://woolen-sepia-verbena.glitch.me/movies", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(movieObj),
	}).then(() => fetch("https://woolen-sepia-verbena.glitch.me/movies")).then(resp => resp.json()).then(() => getList());
	addTitle.value = ''; //resets typed value

}


// Delete Movie list
function deleteMovie(movieId) {
	fetch("https://woolen-sepia-verbena.glitch.me/movies/" + movieId, {
		method: "DELETE"
	}).then(() => fetch("https://woolen-sepia-verbena.glitch.me/movies")).then(resp => resp.json()).then(() => getList());
}

// Edit Movie List
function editMovie(movieID, title, rating) {
	let editedMovie = {
		title: title,
		rating: rating,
	};
	fetch("https://woolen-sepia-verbena.glitch.me/movies/" + movieID, {
		method: "PUT",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(editedMovie)
	})
		.then(() => fetch("https://woolen-sepia-verbena.glitch.me/movies")).then(resp => resp.json()).then(() => getList());
}

submitButton.addEventListener('click', addMovie);

// Edit Rating Function
function editRating(rating) {
	let html = ""
	if (rating == 1) {
		html += `<select id="selector" class="form-select ratingArea" aria-label="Default select example">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>`
		return html;
	} else if (rating == 2) {
		html += `<select id="selector" class="form-select ratingArea" aria-label="Default select example">
                    <option value="1">1</option>
                    <option selected value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>`
		return html;
	} else if (rating == 3) {
		html += `<select id="selector" class="form-select ratingArea" aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option selected value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>`
		return html;
	} else if (rating == 4) {
		html += `<select id="selector" class="form-select ratingArea" aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option selected value="4">4</option>
                    <option value="5">5</option>
                </select>`
		return html;
	} else if (rating == 5) {
		html += `<select id="selector" class="form-select ratingArea" aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option selected value="5">5</option>
                </select>`
		return html;
	}
}
// Search bar