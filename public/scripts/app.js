/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // Test / driver code (temporary). Eventually will get this from the server.
  const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];



  function countDays(date){
    let dateBefore = new Date(date);
    let dateNow = new Date(Date.now())
    let oneDay=1000*60*60*24;
    let dateBefore_ms = dateBefore.getTime();
    let dateNow_ms = dateNow.getTime();
    let diff = Math.round((dateNow_ms - dateBefore_ms) / oneDay);
    return diff
  }

  function createTweetElement(input) {
    let day = countDays(input.created_at)
    let htmlCode =
    `<article class="old-tweets">
      <ul>${input.user.handle}</ul>
      <header>
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

  function renderTweets(tweets) {
    for(let eachUser of tweets){
      let $tweet = createTweetElement(eachUser);
      $("#tweets-container").append($tweet);
    }
  }
  renderTweets(data);
});
