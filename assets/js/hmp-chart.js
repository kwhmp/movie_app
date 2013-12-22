
	function createTitle(text, margin, fontSize) {
		var title = new Object();
		title.text = text;
		title.margin = margin;
		title.fontSize = fontSize;
		return title;
	}

	function createAxisX(title, angle, labelFontSize) {
		var axisX = new Object();
		axisX.title = title;
		axisX.labelAngle = angle;
		axisX.labelFontSize = labelFontSize;
		return axisX;
	}

	function createAxisY(title, prefix, suffix, labelFontSize) {
		var axisY = new Object();
		axisY.title = title;
		axisY.prefix = prefix;
		axisY.suffix = suffix;
		axisY.labelFontSize = labelFontSize;
		return axisY;
	}

	function plot(id, chartData) {
		var chart = new CanvasJS.Chart(id, chartData);
		chart.render();
	}


	// All Time bar chart
	function alltime(json_object) {

		var title = createTitle("Top Gross of All Time (Top 20)", 30, 60);
		var axisX = createAxisX("Title", 0, 16);
		var axisY = createAxisY("Top Gross", "$", "M", 16);

		axisX.titleFontSize = 30;
		axisY.titleFontSize = 30;

		var data = new Array();
		var dataSeries = new Object();

		dataSeries.type = "bar";
		dataSeries.toolTipContent = "{label}, <strong>${y}</strong> million";

		var dataPoints = new Array();

		for (var i = 19; i >= 0; i--) {
			var label = new Object();
			var obj = eval(json_object[i]);
			label.label = obj.title;
			label.y = parseFloat(obj.worldwide);
			dataPoints.push(label);
		};

		dataSeries.dataPoints = dataPoints;

		data.push(dataSeries);

		var chartData = new Object();

		chartData.zoomEnabled = true;
		chartData.title = title;
		chartData.axisX = axisX;
		chartData.axisY = axisY;
		chartData.data = data;

		document.getElementById("myChart").style.height = "1200px";

		plot("myChart", chartData);

	}

	function yearly(json_object) {

		var title = createTitle("Top Gross Movie in each year", 30, 60);
		var axisX = createAxisX("Year", 0, 16);
		var axisY = createAxisY("Top Gross", "$", "M", 16);

		axisX.titleFontSize = 30;
		axisY.titleFontSize = 30;

		var data = new Array();
		var dataSeries = new Object();

		dataSeries.type = "column";
		dataSeries.toolTipContent = "{name} {label}, <strong>${y}</strong> million";

		var dataPoints = new Array();

		for (var i = 0; i <= 43; i++) {
			var label = new Object();
			var obj = eval(json_object[i]);
			label.name = obj.title;
			label.label = obj.year;
			label.y = parseFloat(obj.worldwide);
			dataPoints.push(label);
		};

		dataSeries.dataPoints = dataPoints;

		data.push(dataSeries);

		var chartData = new Object();

		chartData.zoomEnabled = true;
		chartData.title = title;
		chartData.axisX = axisX;
		chartData.axisY = axisY;
		chartData.data = data;

		document.getElementById("myChart").style.height = "600px";

		plot("myChart", chartData);

	}

	function studios(json_object) {

		var title = createTitle("Studios Gross of All time (Top 15)", 30, 60);
		var axisX = createAxisX("Studio", 45, 16);
		var axisY = createAxisY("Total Gross", "$", "M", 16);

		axisX.titleFontSize = 30;
		axisY.titleFontSize = 30;

		var data = new Array();
		var dataSeries = new Object();

		dataSeries.type = "column";
		dataSeries.toolTipContent = "{label}, <strong>${y}</strong> million";

		var dataPoints = new Array();

		for (var i = 0; i <= 14; i++) {
			var label = new Object();
			var obj = eval(json_object[i]);
			label.label = obj.studio;
			label.y = parseFloat(obj.sum);
			dataPoints.push(label);
		};

		dataSeries.dataPoints = dataPoints;

		data.push(dataSeries);

		var chartData = new Object();

		chartData.zoomEnabled = true;
		chartData.title = title;
		chartData.axisX = axisX;
		chartData.axisY = axisY;
		chartData.data = data;

		document.getElementById("myChart").style.height = "600px";

		plot("myChart", chartData);

	}

	function genres(json_object) {

		var title = createTitle("Top Genres Gross (From Top 60 Movies)", 30, 60);
		var axisX = createAxisX("Genre", 45, 16);
		var axisY = createAxisY("Gross", "$", "M", 16);

		axisX.titleFontSize = 30;
		axisY.titleFontSize = 30;

		var data = new Array();
		var dataSeries = new Object();

		dataSeries.type = "column";
		dataSeries.toolTipContent = "<h4>{label}</h4><strong>${y}</strong> million";

		var dataPoints = new Array();

		var temp = "null";
		var sumgross = 0;
		var gross = [];
		var genre = [];

		for (var i = 0; i <= 59; i++) {
			var label = new Object();
			var obj = eval(json_object[i]);
			label.label = obj.genre;
			label.y = parseFloat(obj.worldwide_gross);
			if (i == 0) {
				temp = obj.genre;
				sumgross += parseFloat(obj.worldwide_gross);
			} else if (temp != obj.genre) {
				// label.label = temp;
				// label.y = parseFloat(sumgross);
				// dataPoints.push(label);
				gross.push(sumgross);
				genre.push(temp);
				temp = obj.genre;
				sumgross = 0;
			}
			else if (temp == obj.genre) {
				sumgross += parseFloat(obj.worldwide_gross);
			}
		};

		gross.push(sumgross);
		genre.push(temp);

		for (var i = 0; i < 8; i++) {
			for (var j = i+1; j < 8; j++) {
				if (gross[j] > gross[i]) {
					var temp = gross[j];
					gross[j] = gross[i];
					gross[i] = temp;
					temp = genre[j];
					genre[j] = genre[i];
					genre[i] = temp;
				}
			}
		}

		for (var i = 0; i < 8; i++) {
			var label = new Object();
			label.label = genre[i];
			label.y = parseFloat(gross[i]);
			dataPoints.push(label);
		};

		dataSeries.dataPoints = dataPoints;

		data.push(dataSeries);

		var chartData = new Object();

		chartData.zoomEnabled = true;
		chartData.title = title;
		chartData.axisX = axisX;
		chartData.axisY = axisY;
		chartData.data = data;

		document.getElementById("myChart").style.height = "600px";

		plot("myChart", chartData);

	}

	function people(json_object) {

		var title = createTitle("Actors & Actresses Total Gross", 30, 60);
		var axisX = createAxisX("Number of Movies", 0, 16);
		var axisY = createAxisY("Total Gross", "$", "M", 16);

		axisX.titleFontSize = 30;
		axisX.maximum = 60;
		axisY.titleFontSize = 30;
		axisY.minimum = 1800;
		axisY.includeZero = false;

		var data = new Array();
		var dataSeries = new Object();

		dataSeries.type = "scatter";
		dataSeries.toolTipContent = "<h4>{name}</h4><h5>{x} movies</h5><strong>${y}</strong> million";

		var dataPoints = new Array();

		for (var i = 0; i <= 49; i++) {
			var label = new Object();
			var obj = eval(json_object[i]);
			label.name = obj.person;
			label.x = obj.number_movies;
			label.y = parseFloat(obj.total_gross);
			dataPoints.push(label);
		};

		dataSeries.markerSize = 20;
		dataSeries.dataPoints = dataPoints;

		data.push(dataSeries);

		var chartData = new Object();

		chartData.zoomEnabled = true;
		chartData.title = title;
		chartData.axisX = axisX;
		chartData.axisY = axisY;
		chartData.data = data;

		document.getElementById("myChart").style.height = "600px";

		plot("myChart", chartData);

	}

	function LineChartStudios(json_object){
		var title = createTitle("Top 5 Studios", 30, 60);
		var axisX = createAxisX("Year", 90, 16);
		var axisY = createAxisY("Total Gross", "$", "M", 16);

		axisX.titleFontSize = 30;
		axisX.minimum = 1999;
		axisX.maximum = 2014;
		axisX.valueFormatString = "####";
		axisY.titleFontSize = 30;
		axisY.maximum = 2200;

		var index = 0;
		var data = new Array();
		var tempyear = 0;
		var tempstudio = "";
		for(var i = 0 ; i < 5 ; i++){
			var dataSeries = new Object();
			dataSeries.type = "line";
			var dataPoints = new Array();

			var obj = eval(json_object[index]);
			tempstudio = obj.studio;
			dataSeries.name = obj.studio;
			while (true) {
				if (tempstudio != obj.studio) {
					break;
				}
				else {
					var label = new Object();
					label.x = obj.year;
					label.y = parseFloat(obj.total_gross);

					dataPoints.push(label);
					index++;
					tempstudio = obj.studio;
					obj = eval(json_object[index]);
				}
			}
			dataSeries.dataPoints = dataPoints;
			dataSeries.toolTipContent = "<h4>{name}, {x}</h4><strong>${y}</strong> million";
			dataSeries.showInLegend = true;
			data.push(dataSeries);
		}

		var chartData = new Object();
		chartData.title = title;
		chartData.axisX = axisX;
		chartData.axisY = axisY;
		chartData.data = data;

		document.getElementById("myChart").style.height = "1000px";

		plot("myChart", chartData);
    }

    function compareStudio(json_object){
		var title = createTitle("Top 10 Studios", 30, 60);
		var axisX = createAxisX("Year", 90, 16);
		var axisY = createAxisY("Total Gross", "$", "M", 16);

		axisX.titleFontSize = 30;
		axisX.minimum = 1999;
		axisX.maximum = 2014;
		axisX.valueFormatString = "####";
		axisY.titleFontSize = 30;
		axisY.maximum = 2200;

		var index = 0;
		var data = new Array();
		var tempyear = 0;
		var tempstudio = "";
		for(var i = 0 ; i < 2; i++){
			var dataSeries = new Object();
			dataSeries.type = "line";
			var dataPoints = new Array();

			var obj = eval(json_object[index]);
			tempstudio = obj.studio;
			dataSeries.name = obj.studio;
			while (true) {
				if (tempstudio != obj.studio) {
					break;
				}
				else {
					var label = new Object();
					label.x = obj.year;
					label.y = parseFloat(obj.total_gross);

					dataPoints.push(label);
					index++;
					tempstudio = obj.studio;
					obj = eval(json_object[index]);
				}
			}
			dataSeries.dataPoints = dataPoints;
			dataSeries.toolTipContent = "<h4>{name}, {x}</h4><strong>${y}</strong> million";
			dataSeries.showInLegend = true;
			data.push(dataSeries);
		}

		var chartData = new Object();
		chartData.title = title;
		chartData.axisX = axisX;
		chartData.axisY = axisY;
		chartData.data = data;

		document.getElementById("myChart").style.height = "1000px";

		plot("myChart", chartData);
    }

    function pie(number, genre, value) {

		document.getElementById("myChart").style.height = "600px";

    	var chart = new CanvasJS.Chart("myChart",
    	{
    		title:{
    			text: genre + " Genre Marketshare"
    		},
    		legend:{
    			verticalAlign: "bottom",
    			horizontalAlign: "center"
    		},
    		data: [
    		{       
    			type: "pie",
    			toolTipContent: "<h4>{legendText} <strong>{value}</strong> million</h4>",
    			startAngle: 270,
    			showInLegend: true,
    			dataPoints: [
    			{  y: number, legendText: genre, indexLabel: genre, value: value },
    			{  y: 60-number, legendText:"Other Genres", indexLabel: "Other Genres", value: 52130.9-value }
    			]
    		}
    		]
    	});

    	chart.render();

	}

	function allgenrepie() {

		document.getElementById("myChart").style.height = "600px";

    	var chart = new CanvasJS.Chart("myChart",
    	{
    		title:{
    			text: "Genres Marketshare"
    		},
    		legend:{
    			verticalAlign: "bottom",
    			horizontalAlign: "center"
    		},
    		data: [
    		{       
    			type: "pie",
    			toolTipContent: "<h4>{legendText} <strong>{y}</strong> movies</h4>",
    			startAngle: 270,
    			showInLegend: true,
    			dataPoints: [
    			{  y: 13, legendText:"Fantasy", indexLabel: "Fantasy" },
    			{  y: 12, legendText:"Action", indexLabel: "Action" },
    			{  y: 12, legendText:"Animation", indexLabel: "Animation" },
    			{  y: 11, legendText:"Sci-Fi", indexLabel: "Sci-Fi" },
    			{  y: 5, legendText:"Romance", indexLabel: "Romance" },
    			{  y: 4, legendText:"Adventure", indexLabel: "Adventure" },
    			{  y: 2, legendText:"Family", indexLabel: "Family" },
    			{  y: 1, legendText:"Thriller", indexLabel: "Thriller" }
    			]
    		}
    		]
    	});

    	chart.render();

	}

	function closeCompare() {
		$("#compare").hide();
		$("#myChart").show();
	}
