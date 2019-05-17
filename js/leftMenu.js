var li = $('.properties__item');
$('[type="range"]').on('input', function(){
	li.hide().slice(0, $(this).val() / 10).show();
});