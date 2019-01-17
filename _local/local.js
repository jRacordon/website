$(document).ready(function(){
	
	$('#addPage').on('click', function(){
		addPage();
	})
});

function addPage(){
	$.ajax({
		url: '../scripts/addPage.php',
		data: {name: $('#addPageName').val()},
		type: 'POST',
		success: function(data){
			$('#addPageName').val("");
			$('#addPageMsg').html(data);
		}
	});
}

