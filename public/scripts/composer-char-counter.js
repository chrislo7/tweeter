$(document).ready(function() {
  const textarea = document.getElementById("textarea");
  var count = 140;

  var countChar = function() {
    const counter = $(this).siblings(".counter");
    let char = this.value.length;
    let val = count - char;
    if (val < 0) {
      counter.css("color", "red");
    } else {
      counter.css("color", "black");
    }
    counter.text(val);
  };

  textarea.addEventListener("keyup", countChar);
});
