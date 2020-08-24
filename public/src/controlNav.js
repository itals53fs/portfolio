
(function(){
  'use strict'
  let $nav = document.querySelector('[data-js="nav"]')
  let $menu = document.querySelector('div[data-js="menu"');
  let $button = document.querySelector('[data-js="button"]');

  
  $button.addEventListener('click',display, false);


  function display(){
    let display = $menu.style.display;
    $button.textContent = $button.textContent == '-' ? "X" : "-";
  
    if(display == 'none'){
      $menu.style.display = 'inline';
      $nav.style.borderRight = 'solid 1px rgba(0,0,0,0.2)';
      $nav.style.borderBottom = 'solid 1px rgba(0,0,0,0.2)';
      $nav.style.background = 'rgba(0,0,0,0.1)';

    }else{
      $menu.style.display = 'none';
      $nav.style.background = 'none';

      $nav.style.borderRight = 'none';
      $nav.style.borderBottom = 'none';
    }
    
  }

})();