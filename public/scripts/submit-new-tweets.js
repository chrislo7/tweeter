 $(document).ready(function() {

  $( "input" ).click(function( event ) {
    event.preventDefault();
    if (!$('textarea').val()) {
      $("err").text('Nothing entered!')
      $("err").fadeIn();
    } else if ($('textarea').val().length > 140){
      $("err").text("Your tweet contains too many characters!")
      $("err").fadeIn();
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
          $('err').css("display", "none")
          $('textarea').val('');
          $('.counter').text(140);
        }
      })
    }
  });
})
