

//ヘッダー上部固定
var header_window = $(window),
    _header = $('.header'),
    top_height;

header_window.scroll(function(){
  top_height = $('.top-wrapper').height();
  if(header_window.scrollTop() > top_height){
    _header.addClass('fixed');
  }
  else{
    _header.removeClass('fixed');
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

