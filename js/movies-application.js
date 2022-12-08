// loader;
// $('#reload').addClass('loadingimage')
fetch("https://cloud-happy-fox.glitch.me/movies").then(resp => resp.json()).then(data => console.log(data))

var toggle = $('#reload').toggleClass('loadingimage')



$('#reload').click(function(){
    getList()
})

function getList(){
    $('#reload').toggleClass('loadingimage')
    var movielist = document.getElementById('movielist');
// .then(data => lastcommit.innerText = ('Date of last commit: ' + data[0].commit.author.date))
    fetch("https://cloud-happy-fox.glitch.me/movies").then(resp => resp.json()).then(data => movielist.innerText = data[0].title)
        .then(() => $('#reload').toggleClass('loadingimage')
            // .then(data => console.log(data))

)


    // if ( display === true ) {
    //     $( "#loadingimage" ).show();
    // } else if ( display === false ) {
    //     $( "#loadingimage" ).hide();
    // }
}
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

