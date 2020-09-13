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
