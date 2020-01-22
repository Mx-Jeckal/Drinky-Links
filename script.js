$('#test').on('click', function(){
    var searchInput = $('#searchInput').val();
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchInput;
     $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        console.log(response);
        var results = response.drinks;
        var drinksDiv = $('#drinksContent');

        

        for(var i = 0; i < results.length; i++){

            var drinkName = $('<h1>').text(results[i].strDrink);

            console.log(drinkName);
            var drinkImg = $('<img>');
            drinkImg.attr('src', results[i].strDrinkThumb);
            var instBtn = $('<button>').text('Show Instructions');
            var videosBtn = $('<button>').text('Videos');
            var ingr = $('<button>').text('Ingridients');
            var btnDiv = $('<div>');
            btnDiv.append(instBtn, videosBtn, ingr);
            drinksDiv.append(drinkName, drinkImg, btnDiv);

        }




    });

});



$('#random').on('click', function(){
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
     $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        console.log(response);
    
        var randomDiv = $('#randomDiv');
        var drinkName = $('<h1>').text(response.drinks[0].strDrink);
        console.log(drinkName);
        var drinkImg = $('<img>');
        drinkImg.attr('src', response.drinks[0].strDrinkThumb);
        randomDiv.append(drinkName, drinkImg)

    });

});

