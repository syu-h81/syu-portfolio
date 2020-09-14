$(function () {
  $('#toggle').on('click',function(){
  if($('#slideR').hasClass('off')){
    $('#slideR').removeClass('off');
    $(this).animate({'marginLeft':'400px'},300).addClass('on');
  }else{
    $('#slideL').addClass('off');
    $(this).animate({'marginLeft':'0px'},300);
  }
});
})

$(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) { //80px以上スクロールしたら上部に固定
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });
});
