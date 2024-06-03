document.addEventListener('DOMContentLoaded', function() {
  const dmdrk1 = document.querySelectorAll('.dmdrk1');
  const dmdrk2 = document.querySelectorAll('.dmdrk2');
  const dmdrk3 = document.querySelectorAll('.dmdrk3');
  

  window.addEventListener(`scroll`,function(){

    for(let dmdrk11 of dmdrk1){
      const maxScroll = window.scrollY;
      if (maxScroll >= 700){
        dmdrk11.classList.add(`on`);
      }
    }
    for(let dmdrk22 of dmdrk2){
      const maxScroll = window.scrollY;
      if(maxScroll >= 1300){
        dmdrk22.classList.add(`on`);
      }
    }
    for(let dmdrk33 of dmdrk3){
      const maxScroll = window.scrollY;
      if(maxScroll >= 1900){
        dmdrk33.classList.add(`on`);
      }
    }



  });
  

  

  
});
