 $(document).ready(function() {

  $( "input" ).click(function( event ) {
    event.preventDefault();
    if (!$('textarea').val()) {
      alert("You haven't tweeted anything yet!")
    } else if ($('textarea').val().length > 140){
      alert("Your tweet contains too many characters!")
    } else {
      let serializedTweet = $("textarea").serialize();
      let content = $("textarea").val();
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: {text:content},
        success: function(){
          $(".old-tweets").remove();
          loadTweets();
          $('textarea').val('');
          $('.counter').text(140);
        }
      })
    }
  });
})
