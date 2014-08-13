var len=$('.image-class').length;
$('#btn').click(function(){
  var index=$('.image-class:last').index();
  index=((index+1)%len)+1;
  $('#imgArea').append('<img class="image-class img-rounded" src="img/'+index+'.png" /> ');
});