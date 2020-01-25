$('#cocktail').on('click', function(){
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
   $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response);


      var results = response.drinks;
      var drinkcard = $('#fadeCardFather');

      
      for(var i = 0; i < 4; i++){
          //randomize a number variable 
          var randomDrink = 1 + Math.floor(Math.random() * 100);
          var searchDiv = $('<div>');
          searchDiv.attr('class', 'uk-card uk-card-default uk-card-body fadeCard');
          var drinkName = $('<h3>').text(results[randomDrink].strDrink);
          drinkName.attr('class', 'uk-card-title');
          var drinkImg = $('<img>');
          drinkImg.attr('src', results[randomDrink].strDrinkThumb);
          drinkImg.attr('class', 'uk-img')
          var drinkVid = $('<button>');
          drinkVid.attr('class', 'uk-button uk-button-secondary uk-button-small');
          drinkVid.attr('id', 'video-btn');
          drinkVid.attr('title', 'Videos');
          var drinkInst = $('<button>');
          drinkInst.attr('class', 'uk-button uk-button-secondary uk-button-small');
          drinkInst.attr('id', 'inst-btn');
          drinkInst.attr('title', 'Instructions');
          var spanVidIcon = $('<span>').attr('uk-icon', "play-circle");
          var spanInstIcon = $('<span>').attr('class', "fas fa-glass-martini-alt");
          drinkVid.append(spanVidIcon);
          drinkInst.append(spanInstIcon);
          searchDiv.append(drinkName, drinkImg, drinkVid, drinkInst);
          drinkcard.prepend(searchDiv);
          $('#modal-div').prepend(drinkcard);

        }


    })

  })
      
    
    
  




// $('#random').on('click', function(){
//     var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
//      $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function(response){
//         console.log(response);
  
//         var randomDiv = $('#randomDiv');
//         var drinkName = $('<h1>').text(response.drinks[0].strDrink);
//         console.log(drinkName);
//         var drinkImg = $('<img>');
//         drinkImg.attr('src', response.drinks[0].strDrinkThumb);
//         randomDiv.append(drinkName, drinkImg)

//     });

// });
