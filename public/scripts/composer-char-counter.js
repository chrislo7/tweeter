$(document).ready(function() {
  const textarea = $('#textarea');
  var count = 140;

  var countChar = function() {
    const counter = $(this).siblings(".counter");
    let char = $(this).val().length;
    let val = count - char;
    // if character count is under 0, number will be red
    if (val < 0) {
      counter.css("color", "red");
    } else {
      counter.css("color", "black");
    }
    counter.text(val);
  };

  // only counts on input
  // keyup, keydown selectors do not work, because when user uses cmd-delete...etc. it does not work properly
  textarea.on("input",  countChar);
});


// counts character down starting from 140;