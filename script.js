

//ヘッダー上部固定
var header_window = $(window),
header_height = $('header').height(),
    _header = $('.header'),
    top_height;

header_window.scroll(function(){
  top_height = $('.top-wrapper').height();
  if(header_window.scrollTop() > top_height){
    _header.addClass('fixed');
    header_height = $('#works').css('margin-top', header_height + 90);
  }
  else if(header_widnow.scrollTop() < top_height){
    _header.removeClass('fixed');
    header_height = $('#works, #about, #skill, #contact, footer').css('margin-top', header_height - 90);
  }
});

//メニューバーの処理
$(function () {
  $('#toggle').on('click', function() {
    $('#toggle').toggleClass('show');
    if($('.responsive-menu-wrapper').hasClass('slideL-fadein')) {
      $('.responsive-menu-wrapper').removeClass('slideL-fadein');
    }else {
      $('.responsive-menu-wrapper').addClass('slideL-fadein');
    }
  });
});


//worksのスクロールフェードイン処理
$(function(){
  $(window).scroll(function (){
    $(".work").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('fadeIn');
      }
    });
  });
});


//トップ移動のマーク
$(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) { //80px以上スクロールしたら上部に固定
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });
});

