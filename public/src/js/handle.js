const $modalOverlay = document.querySelector('.modal-overlay');
const $cards = document.querySelectorAll('.card');
const $divImg = document.querySelector('.modall-content');
const $close = document.querySelector('.close-modal');
const $textP = document.querySelector('[data-js="text"]')
Array.prototype.forEach.call($cards, function(e){

  e.addEventListener('click', function(){
    const $img = e.firstElementChild.firstElementChild.src;
    const p = e.childNodes[3].firstElementChild;
    $divImg.firstElementChild.src = $img;
    $textP.textContent = p.textContent;
    $modalOverlay.classList.add('active');

  }, false)
})

$close.addEventListener('click', function(){
  $modalOverlay.classList.remove('active');
},false)
