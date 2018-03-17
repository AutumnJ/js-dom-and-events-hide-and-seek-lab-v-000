//Define a function getFirstSelector(selector),
//which accepts a selector and returns the first element that matches.
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

//Define a function nestedTarget() that pulls a .target out of #nested
function nestedTarget() {
  return document.querySelector('#nested .target');
}

//Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n
function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

//Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node.
function deepestChild(){
  const list = document.querySelectorAll('#grand-node div');
  return list[list.length-1];
}