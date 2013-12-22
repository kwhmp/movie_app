
	$(document).on("click", '#alltime_graph', function() {
    	closeCompare();
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
    	closeCompare();
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
    	closeCompare();
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

	$(document).on("click", '#genres_graph', function() {
    	closeCompare();
		$.ajax({
			url: "ajax_c/getGenres",
			type: "get",
			success: function(response) {
				// var json_object = JSON.parse(response);
				var json_object = eval(response);
				genres(json_object);
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

	$(document).on("click", '#people_graph', function() {
    	closeCompare();
		$.ajax({
			url: "ajax_c/getPeople",
			type: "get",
			success: function(response) {
				// var json_object = JSON.parse(response);
				var json_object = eval(response);
				people(json_object);
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

	$(document).on("click", '#Linechart_Studios' , function(){
    	closeCompare();
        $.ajax({
           url: "ajax_c/getStudiosLineChart",
            type: "get",
            success: function(response){
                var json_object = eval(response);
                LineChartStudios(json_object);
            },
            error:function(xhr,error){
                alert(xhr.responseText + error.Message);
            }
        });  
    });

    $(document).on("click", '#compareStudio' , function(){
    	var first = $("#first").val();
    	var second = $("#second").val();
        $.ajax({
            url: "ajax_c/getCompare",
            type: "get",
            data: "first=" + first + "&second=" + second,
            success: function(response){
                var json_object = eval(response);
                compareStudio(json_object);
            },
            error:function(xhr,error){
                alert(xhr.responseText + error.Message);
            }
        });  
    });

	$(document).on("click", '#allgenrepie' , function(){
    	closeCompare();
        allgenrepie();  
    });

    $(document).on("click", '#Action' , function(){
    	closeCompare();
        pie(12, "Action", 10738.6);  
    });

    $(document).on("click", '#Adventure' , function(){
    	closeCompare();
        pie(4, "Adventure", 3075.3);  
    });

    $(document).on("click", '#Animation' , function(){
    	closeCompare();
        pie(12, "Adventure", 9629.1);  
    });

    $(document).on("click", '#Family' , function(){
    	closeCompare();
        pie(2, "Family", 1025.5);  
    });
    $(document).on("click", '#Fantasy' , function(){
    	closeCompare();
        pie(13, "Fantasy", 11657.9);  
    });
    $(document).on("click", '#Romance' , function(){
    	closeCompare();
        pie(5, "Romance", 4438.5);  
    });
    $(document).on("click", '#Sci-Fi' , function(){
    	closeCompare();
        pie(11, "Sci-Fi", 10807.8);  
    });
    $(document).on("click", '#Thriller' , function(){
    	closeCompare();
        pie(1, "Thriller", 758.2);  
    });

    $(document).on("click", '#toggleCompare' , function(){
        $('#compare').show(); 
        // $('#myChart').hide();
        // $('#compareChart').show();
    });
