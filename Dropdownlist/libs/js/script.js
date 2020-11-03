	function list() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			success: function(result) {

				console.log(result);

					if (result.status.name == "ok") {
						$('#countryName').html(result['data'][0]['name']);
						console.log(result['data'][0]['name']);
					}
			},
		}); 

	};