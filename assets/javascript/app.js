//API KEY 3f4ef80b7a864d26acda3fda38bfde9e

//THINGS TO DO
	// Obtain API Key
	// Pick a subject for giffs --- sci-fi, guardians of the galaxy, star trek, star wars, babylon 5, x-men, alien, battlestar galactica, fifth element
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

	// Check to see if onclick is working with data-name... so far it is.
	function alertGifName() {
		var gifName = $(this).attr("data-name");
		alert(gifName);
	}

	// Check to see if onclick is working with data-name... so far it is.
	$(document).on("click", ".category", alertGifName);
	
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

	function displayGif() {
		var gif = $("this").attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&rating=g&api_key=3f4ef80b7a864d26acda3fda38bfde9e&limit=10";
		// console.log(gif);
		// console.log(queryURL);

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			console.log(response);
			// 	// Create a div to put the gifs in and class of 'category' from renderButton var a
				var gifDiv = $("<div class='category'>");







			// var results = response.data;

			// // Loop through array item results	
			// for (var n = 0; n < topics.length; n++) {
			// 	// Create a div to put the gifs in
			// 	var givDiv = $("<div>");

				// Creates paragraph tag to put the rating in
				// var p = $("<p>").text("This GIF rated: " + )

			})
		}
	

	// }

renderButtons();
displayGif();