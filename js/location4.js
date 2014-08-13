var len=$('.image-class').length;
var counter = 1;
$(document).ready(function(){
  $('#btn').click(function(){
    var img = $("<img>");
    img.addClass("image-class");
    img.addClass("img-rounded");
    img.attr("src", "img/"+counter+".png");
    img.click(function() {
      var n=$(this).index();
      $('.image-class').eq(n).remove();
    });

    $('#imgArea').append(img);
    counter++;
    if(counter > 5) counter = 1;
  });

  // 이미지 삭제하기
  $('.image-class').click(function() {
    var n=$(this).index();
    $('.image-class').eq(n).remove();
  });
});