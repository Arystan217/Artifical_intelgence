$(document).ready(function(){
  
  // клик по бургер меню
  $('.burger-icon').click(function(){
    $(this).toggleClass('burger-icon--active');
    $('.burger').toggleClass('burger--active');
  });

  
  // проверка скролла при загрузке страницы
  if (window.scrollY > 0){
    $("header").addClass("header--scroll");
  }
  else {
    $("header").removeClass("header--scroll");
  }
  // шапка при скролле
  $(window).scroll(function(){
    if (this.scrollY > 0){
      $("header").addClass("header--scroll");
    }
    else {
      $("header").removeClass("header--scroll");
    }
  });

})