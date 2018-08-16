$(document).ready(function() {
   $("#nav-bar .compose-button").click(function(){
      $(".new-tweet").slideToggle('slow');
    })
})

// On click of compose-button, .new-tweet will slide out using .slideToggle()