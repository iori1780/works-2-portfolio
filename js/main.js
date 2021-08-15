$(function(){

  $('.accordion__item').on('click', function() {
    //クリックしたら、答えをスライドさせる
    $(this).children('.accordion__content').slideToggle(200);
    //クリックしたら、矢印の向きを変える
    $(this).children('.accordion__term').toggleClass('on', 200);
  });
});