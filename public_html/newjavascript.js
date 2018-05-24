//превью фото
function readURL(input) {
        if (input.files && input.files[0]) {
                        var reader = new FileReader();            
                        reader.onload = function (e) {	
                                $('#image').attr('src', e.target.result);
                        }
                reader.readAsDataURL(input.files[0]);
        }
}    
$("#imgInput").change(function(){
        readURL(this);
});

//стилизация input и select	
/*$(function() {
	$('select').each(function(){
		$(this).styler({
			selectPlaceholder: $(this).find('option:first-of-type').attr('label'),
			singleSelectzIndex: '1000'
		});
	});
});*/


