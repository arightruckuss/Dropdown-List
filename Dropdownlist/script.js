var $select = $('#people');

$.getJSON('getCountryInfo.php', function(data) {
  $select.html('');
  
  for(var i = 0; i < data['data'].length; i++) {
    names = data['data'][i]['name'];
    value = data['data'][i]['code']
      $('#people').append($('<option value='+ value +'>' + names + '</option>'));
    }
    });

$(document).change(function() {
	console.log($("#people").val());
	});
  