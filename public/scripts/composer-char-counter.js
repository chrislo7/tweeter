const textarea = document.getElementById('textarea');
var count = 140;

var countChar = function() {
  var char = this.value.length;
  var num = count - char;
  if (num < 0) {
    $(this).siblings('.counter').css('color', 'red')
  } else {
    $(this).siblings('.counter').css('color', 'black')
  }
  $(this).siblings('.counter').text(num);
}

textarea.addEventListener('keyup', countChar)