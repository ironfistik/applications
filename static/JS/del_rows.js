$('#dellrows').click(function(){
	if($('.line').length > 1){
	$('.line').last().remove();
	count--;
	}
});