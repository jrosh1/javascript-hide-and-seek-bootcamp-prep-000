function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested')
}

function increaseRankBy(n){
  const lis = document.getElementsByClassName('ranked-list')
  
  for (var i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i])+n
  }
}

function deepestChild(){
  var el = document.getElementById('grand-node').querySelectorAll('div')
  
  return el[el.length-1]
}