function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div.target')
}

function increasedByRank(n) {
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0, l = list.length; i < l; i++) {
    parseInt(list[i].innerHTML) = i + n;
  }
}

function deepestChild() {

}
