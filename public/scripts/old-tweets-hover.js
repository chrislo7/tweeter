$(document).ready(function() {
  const article = document.getElementsByTagName('article')

  var hover = function() {
    console.log(this)
  }
  article.addEventListener("mouseover", hover);
});
