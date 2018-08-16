$(document).ready(function() {
  $("input").click(function(event) {
    event.preventDefault();
    //throws error next to the tweet button if there is an error
    if (!$("textarea").val()) {
      $("err").text("Nothing entered!");
      $("err").fadeIn();
    } else if ($("textarea").val().length > 140) {
      $("err").text("Your tweet contains too many characters!");
      $("err").fadeIn();
    //serialize tweets and submits user entered tweets to the website
    } else {
      let serializedTweet = $("textarea").serialize();
      let content = $("textarea").val();
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: { text: content },
        success: function() {
    // remove doubled "old-tweets"
          $(".old-tweets").remove();
          loadTweets();
    // resets error (if there was one)
          $("err").css("display", "none");
    // resets textarea to show nothing
          $("textarea").val("");
    // resets character counter back to 140
          $(".counter").text(140);
        }
      });
    }
  });
});
