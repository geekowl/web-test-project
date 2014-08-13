 $('#btn').click(function(){
  var name=$('#input').val();
  var str=$('textarea').val();
  $('#output').text(str+name+'님 안녕하세요?'+'\r');
});