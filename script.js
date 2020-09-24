
$('#submit').click(function() {

	$.ajax({
		url: "index.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#city').val(),
			
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#main').html(result['data']['weather'][0]['main']);      
				$('#description').html(result['data']['weather'][0]['description']);
				$('#pressure').html(result['data']['main']['pressure']);
				$('#temprature').html(result['data']['main']['temp']);
				$('#humidity').html(result['data']['main']['humidity']);
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 


});
