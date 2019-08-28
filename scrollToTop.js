$(document).ready(function(){
  $(window).scroll(function(){
     if($(this).scrollTop() > 200){
         $('.gotoTop').fadeIn();
     }else{
         $('.gotoTop').fadeOut();
     }
  });
        $('.gotoTop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 1000)
  })
  
});