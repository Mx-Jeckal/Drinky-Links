$(document).ready(function() {

    // function YTfunc() {

    // }

    $('#test').on('click', function() {
        var searchInput = $('#searchInput').val();
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchInput;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var results = response.drinks;
            var drinkcard = $('#fadeCardFather');

            for (var i = 0; i < results.length; i++) {
                var searchDiv = $('<div>');
                searchDiv.attr('class', 'uk-card uk-card-default uk-card-body uk-width-1-3');
                var drinkName = $('<h3>').text(results[i].strDrink);
                var drinkImg = $('<img>');
                var drinkVid = $('<button>').attr('class', "uk-padding-small Icon");
                var drinkInst = $('<button>').attr('class', "uk-padding-small Icon float-right");
                var spanVidIcon = $('<span>').attr('uk-icon', "play-circle")
                var spanInstIcon = $('<span>').attr('class', "fas fa-glass-martini-alt ")
                drinkInst.attr('title', "Instructions")
                drinkImg.attr('src', results[i].strDrinkThumb);
                drinkImg.attr('class', 'uk-img')
                drinkVid.append(spanVidIcon)
                drinkInst.append(spanInstIcon)
                searchDiv.append(drinkName, drinkImg, drinkVid, drinkInst);
                drinkcard.prepend(searchDiv);

                var searchterm = String(results[i].strDrink)

                $('.float-right').on('click', function() {

                    var APIKey = "AIzaSyBYxVOdRUzXjdeH_epqpzN493aHA0jLnRM ";

                    // console.log((results[i].strDrink))
                    // Here we are building the URL we need to query the database
                    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=how+to+make+a+drink+" + searchterm + "&key=" + APIKey;
                    // We then created an AJAX call
                    $.ajax({
                        url: queryURL,
                        method: "GET",
                        kind: "youtube#video",

                    }).then(function(response) {

                        // Create CODE HERE to Log the queryURL
                        console.log(queryURL)
                            // Create CODE HERE to log the resulting object
                        console.log(response)



                        var results = response.items
                            // ========================

                        for (var i = 0; i < 3; i++) {
                            console.log(results)
                            var searchDiv = $('<div>')
                            var videoFrame = $('<iframe>')

                            videoFrame.attr('src', ("https://www.youtube.com/embed/" + results[i].id.videoId))
                            console.log(results[i].id.videoId)
                            videoFrame.attr('width', '400px')
                            videoFrame.attr('height', '400px')

                            searchDiv.append(videoFrame)
                            $('#fadeCardFather').prepend(searchDiv)


                        }
                    });
                })

            }

        });

    });







})