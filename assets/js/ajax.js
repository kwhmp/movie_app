
	$(document).on("click", '#alltime_graph', function() {
		$.ajax({
			url: "ajax_c/getAllTime",
			type: "get",
			success: function(response) {
				// var json_object = JSON.parse(response);
				var json_object = eval(response);
				alltime(json_object);
				// for (var i = 0; i < 5; i++) {
					// var obj = eval(json_object[i]);
					// alert(obj.title + " " + obj.worldwide);
				// };
			},
			error: function(xhr, error) {
				alert(xhr.responseText + error.Message);
			}
		});
	});

	$(document).on("click", '#yearly_graph', function() {
		$.ajax({
			url: "ajax_c/getYearly",
			type: "get",
			success: function(response) {
				// var json_object = JSON.parse(response);
				var json_object = eval(response);
				yearly(json_object);
				// for (var i = 0; i < 5; i++) {
					// var obj = eval(json_object[i]);
					// alert(obj.title + " " + obj.worldwide);
				// };
			},
			error: function(xhr, error) {
				alert(xhr.responseText + error.Message);
			}
		});
	});

	$(document).on("click", '#studios_graph', function() {
		$.ajax({
			url: "ajax_c/getStudios",
			type: "get",
			success: function(response) {
				// var json_object = JSON.parse(response);
				var json_object = eval(response);
				studios(json_object);
				// for (var i = 0; i < 5; i++) {
					// var obj = eval(json_object[i]);
					// alert(obj.title + " " + obj.worldwide);
				// };
			},
			error: function(xhr, error) {
				alert(xhr.responseText + error.Message);
			}
		});
	});