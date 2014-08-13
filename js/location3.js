$(function(){
  $('#btn').click(function(){
    var chk=$('.check:eq(2)').is(":checked");
    if(chk)
      alert('성공 :  통과');
    else
      alert('실패 : 3번을 선택해주세요');
  });
});