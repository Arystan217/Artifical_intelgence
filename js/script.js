$(document).ready(function(){
  
  // клик по бургер меню
  $('.burger-icon').click(function(){
    $(this).toggleClass('burger-icon--active');
    $('.burger').toggleClass('burger--active');
  });

})