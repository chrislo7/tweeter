/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // --------------- FUNCTIONS BELOW -------------------



// function to get difference between current date and a given date by days
  function countDays(date){
    let dateBefore = new Date(date);
    let dateNow = new Date(Date.now())
    let oneDay=1000*60*60*24;
    let dateBefore_ms = dateBefore.getTime();
    let dateNow_ms = dateNow.getTime();
    let diff = Math.round((dateNow_ms - dateBefore_ms) / oneDay);
    return diff
  }

// function to output tweet elements (e.g. name, handle..etc.)
  function createTweetElement(input) {
    let day = countDays(input.created_at)
    let htmlCode =
    `<article class="old-tweets">
      <ul>${input.user.handle}</ul>
      <header>
        <img src="${input.user.avatars.small}">
        <h2>${input.user.name}</h2>
      </header>
        <p>${input.content.text}</p>
      <footer>
        <div>${day + " days ago"}</div>
        <div2><i class="fas fa-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i></div2>
      </footer>
      </article>`;
    return htmlCode;
  }

//function to render tweets and prepend (whenever user submits a tweet, it goes to the top rather than bottom)
  function renderTweets(tweets) {
    for(let eachUser of tweets){
      let $tweet = createTweetElement(eachUser);
      $("#tweets-container").prepend($tweet);
    }
  }

//function to load tweets from database
  function loadTweets() {
    $.get( "/tweets", function(data) {
      renderTweets(data);
    })
  }

$(document).ready(function() {
  loadTweets();
});
