//API KEY 3f4ef80b7a864d26acda3fda38bfde9e

//THINGS TO DO
	// Obtain API Key
	// Pick a subject for gifs --- sci-fi, guardians of the galaxy, star trek, star wars, babylon 5, x-men, alien, battlestar galactica, fifth element
	// AJAX to the giphy site
	// Create array of strings related to sci-fi topic
		// Save to var topics
	// Dynamically create buttons from the array list
		// Loop array to append a button with each loop
		// Don't forget to empty the containing div before each addition or multiple buttons with same name will be created
		// User click on button loads 10 STATIC gifs from Giphy API and place them on the page
			// Created empty div with ID to append to
		// User click on still image, change to animate gif and then back to static upon click
	// Show the rating of the gif under each gif

	//** Once above works, add in a search box for user to add custom content
		// Add function to add the new items to the page as a topic

	// ** If all goes well, praise the baby Jesus and have a beer.  Baby Jesus would have wanted that.

//********************************************************************************************************************************
//********************************************************************************************************************************

// VARIABLES
	var topics = ["Battlestar Galactica", "Star Trek", "Dr. Who", "Babylon 5", "Guardians of the Galaxy", "Farscape", "Stargate", "Tron"];


//**************************************************************************************************************************************************
//**************************************************************************************************************************************************

// FUNCTIONS

	// Check to see if onclick is working with data-name with each button... so far it is.
	// I don't understand why this worked and the other ones below did not, but I'll go with this. Throwing speghetti sometimes works... for now
	function alertGifName() {
		var gifTopic = $(this).attr("data-name");
		// alert(gifName);

		// Assign the Giphy search URL to var queryURL with rating of g, limit of 10 gifs, my API key, with search of var gif, which is data-name attribute
		var queryURL = "https://api.giphy.com/v1/gifs/search?rating=g&limit=10&api_key=3f4ef80b7a864d26acda3fda38bfde9e&q=" + gifTopic;
		// console.log(gif);
		console.log(queryURL);

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			console.log(response);
		});
	};



//************************************************************************************************************************************************

	// Render buttons from the topics []
	function renderButtons (){
		$("#category-tag").empty(); // Deletes the buttons before adding new ones to not repeat buttons

		for (var i = 0; i < topics.length; i++) {
			var a = $("<button>"); // Creates a button
			a.addClass("category"); // Add class of category to style with css later
			a.attr("data-name", topics[i]); // Add data-attribute with value of the topic at current index of loop
			a.text(topics[i]); // Button label
			$("#category-tag").append(a);

			console.log(a);
		}
	}


//*************************************************************************************************************************************************

	// Adds a new category button from the search field
	$("#add-category").on("click", function(event){
		event.preventDefault();
		var subject = $("#sci-fi-input").val().trim();
		topics.push(subject);

		renderButtons();
	});

//************************************************************************************************************************************************


//************************************************************************************************************************************************

	// $(".category").on("click", function(){
	// 	var gifTopic = $(this).attr("data-name");  // This means on the mouse click of 'this' current clicked button, pull the data-name attribute and assign it var gif  

	// 	// Assign the Giphy search URL to var queryURL with rating of g, limit of 10 gifs, my API key, with search of var gif, which is data-name attribute
	// 	var queryURL = "https://api.giphy.com/v1/gifs/search?rating=g&limit=10&api_key=3f4ef80b7a864d26acda3fda38bfde9e&q=" + gifTopic;
	// 	// console.log(gif);
	// 	console.log(queryURL);

	// 	$.ajax({
	// 		url: queryURL,
	// 		method: "GET"
	// 	}).done(function(response) {
	// 		console.log(response);
	// 		// var results = response.data;

	// 		// for(var n = 0; n < results.length; n++ ) {
	// 		// 	if (results[n].rating !== "r") {

	// 		// 		var gifDiv = $("<div class='item'>");

	// 		// 		var rating = results[n].rating;
	// 		// 		var p = $("<p>").text("Rating: " + rating);

	// 		// 		var gifImage = $("<img>");

	// 		// 		gifImage.attr("src", results[n].images.fixed_height.url);

	// 		// 		gifDiv.append(p);
	// 		// 		gifDiv.append(gifImage);

	// 		// 		$("#result-gifs").prepend(gifDiv);
	// 		// 	}
	// 		// }

	// 	});
	// });
	

	// function displayGif() {
	// 	var gif = $(this).attr("data-name"); // Do I need to replace ".category" with "this"? 
	// 	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&rating=g&api_key=3f4ef80b7a864d26acda3fda38bfde9e&limit=10";
	// 	// console.log(gif);
	// 	// console.log(queryURL);

	// 	$.ajax({
	// 		url: queryURL,
	// 		method: "GET"
	// 	}).done(function(response) {
	// 		console.log(response);
	// 		// 	// Create a div to put the gifs in and class of 'category' from renderButton var a
	// 			var gifDiv = $("#result-gifs");

	// 			var rating = response.data.rating;

	// 			var pRating = $("<p>").text("Rating: " + rating);

	// 			gifDiv.append(pRating);







			// var results = response.data;

			// // Loop through array item results	
			// for (var n = 0; n < topics.length; n++) {
			// 	// Create a div to put the gifs in
			// 	var givDiv = $("<div>");

				// Creates paragraph tag to put the rating in
				// var p = $("<p>").text("This GIF rated: " + )

		

	// }
// Check to see if onclick is working with data-name with each button... so far it is.
// Finally got this to pull the Giphy data and currently console.logging to view it.
$(document).on("click", ".category", alertGifName);

renderButtons();
// displayGif();