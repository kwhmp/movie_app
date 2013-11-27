
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

		var title = createTitle("All Time", 30, 60);
		var axisX = createAxisX("Title", 90, 16);
		var axisY = createAxisY("Top Gross", "$", "M", 16);

		axisX.titleFontSize = 30;
		axisY.titleFontSize = 30;

		var data = new Array();
		var dataSeries = new Object();

		dataSeries.type = "column";
		dataSeries.toolTipContent = "{label}, <strong>${y}</strong> million";

		var dataPoints = new Array();

		for (var i = 0; i <= 19; i++) {
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

		plot("myChart", chartData);

	}

	function yearly(json_object) {

		var title = createTitle("Yearly", 30, 60);
		var axisX = createAxisX("Year", 0, 20);
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

		plot("myChart", chartData);

	}

	function studios(json_object) {

		var title = createTitle("Studios", 30, 60);
		var axisX = createAxisX("Studio", 0, 16);
		var axisY = createAxisY("Top Gross", "$", "M", 16);

		axisX.titleFontSize = 30;
		axisY.titleFontSize = 30;

		var data = new Array();
		var dataSeries = new Object();

		dataSeries.type = "column";
		dataSeries.toolTipContent = "{label}, <strong>${y}</strong> million";

		var dataPoints = new Array();

		for (var i = 0; i <= 10; i++) {
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

		plot("myChart", chartData);

	}
    
    function LineChartStudios(json_object){
        
        var title = createTitle("All Time", 30, 60);
		var axisX = createAxisX("Title", 90, 16);
		var axisY = createAxisY("Top Gross", "$", "M", 16);

		axisX.titleFontSize = 30;
        axisX.minimum = 1999;
        axisX.maximum = 2014;
		axisY.titleFontSize = 30;
        
       
        //dataSeries.tooltip
        
        var index = 0;
        var data = new Array();
        var tempyear = 0;
        for(var i = 1 ; i <= 10 ; i++){
            var dataSeries = new Object();
            dataSeries.type = "line";
        	var dataPoints = new Array();

            var obj = eval(json_object[index]);
            while (parseInt(obj.year) > tempyear) {
                tempyear = parseInt(obj.year);
                index++;
                var label = new Object();
                label.x = obj.year;
                label.y = parseFloat(obj.total_gross);
                
                dataPoints.push(label);
                obj = eval(json_object[index]);
            }
            tempyear = 0;
			
            dataSeries.dataPoints = dataPoints;
            dataSeries.name = obj.studio;
            dataSeries.showInLegend = true;
            data.push(dataSeries);
        }
        
//        var index = 0;
//        var tempyear = 0;
//        var data = new Array();
//        for (var i = 1; i <= 3; i++) {
//            var dataSeries = new Object();
//            dataSeries.type = "line";
//            var dataPoints = new Array();
//            
//        }
        
        
        
        
        
        var chartData = new Object();
        
//        chartData.zoomEnabled = true;
		chartData.title = title;
		chartData.axisX = axisX;
		chartData.axisY = axisY;
		chartData.data = data;
//        chartData.theme = "theme2";
            plot("myChart", chartData);
        
    }









