const textarea = document.getElementById('textarea');
var count = 140;

var countChar = function() {

  var char = this.value.length;
  $(this).siblings('span')[0].innerHTML = count - char;
  if(counter.innerHTML < 0){}
}

textarea.addEventListener('keyup', countChar)