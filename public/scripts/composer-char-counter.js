var textarea = document.getElementById('textarea');
var counter = document.getElementById('counter');
var count = 140;

var countChar = function() {
  var char = textarea.value.length;
  counter.innerHTML = count - char;
}

textarea.addEventListener('keyup', countChar)