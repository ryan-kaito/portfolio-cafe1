$(function(){
  
  // pc,tablet landscape home header
  $('.secondfadein').fadeIn(1000);
  $('.firstfadein').fadeIn(2000);
  
  // レスポンシブ、ロード時
  if (window.matchMedia( '(min-width: 768px)' ).matches){
    $('.secondfadein').fadeIn(1000);
    $(window).scroll(function (){
      $('.fadein').each(function(){
          var elemPos = $(this).offset().top,
              scroll = $(window).scrollTop(),
              windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 150){
                $(this).addClass('scrollin');
              }
          });
    });
  }else{
    $('.secondfadein').hide();
    $('.fadein').css('opacity','1');
    $('.fadein').css('transform','translate(0, 0)');
    // $('.fadein').css('transition','all 0ms');
  }

  // リサイズ時
  $(window).resize(function(){
    var w = $(window).width();
    var x = 768;
    if (w < x) {
      $('.headerfadein').removeClass('secondfadein');
      $('.headerfadein').fadeOut(1000);
      $('.fadein').css('opacity','1');
      $('.fadein').css('transform','translate(0, 0)');
    } else {
      $('.headerfadein').addClass('secondfadein');
      $('.headerfadein').fadeIn(1000);
      $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
              if (scroll > elemPos - windowHeight + 150){
                  $(this).addClass('scrollin');
                }
            });
      });
    }
  });

  // メニューモーダル
  $('.menu-nav-btn').click(function(){
    $('.nav-modal-wrapper').show(200);
  });
  $('.close-btn').click(function(){
    $('.nav-modal-wrapper').hide(200);
  });
  $('.nav-modal-back').click(function(){
    $('.nav-modal-wrapper').hide(200);
  });



});

