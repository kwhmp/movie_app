
	<div class="container">
		<div class="row" style="padding-top: 50px;">
			<div class="col-sm-3">
				<div class="sidebar-nav-fixed" data-spy="affix" data-offset-top="0">
					<ul id="my-nav" class="nav" style="background-color: #eeeeee; width: 250px;">
						<li>
							<a href="#" onclick="toggle_menu('1')">All time</a>
							<ul id="1_menu" class="custom-nav nav nav-stacked">
								<li>
									<a id="alltime" href="#">All time</a>
								</li>		
							</ul>
						</li>
						<li>
							<a href="#" onclick="toggle_menu('2')">Yearly</a>
							<ul id="2_menu" class="custom-nav nav nav-stacked">
								<li>
									<a href="#">All year</a>	
								</li>		
								<li>
									<a href="#">2013</a>	
								</li>		
								<li>
									<a href="#">2012</a>	
								</li>		
								<li>
									<a href="#">2011</a>	
								</li>
								<li>
									<a href="#">2010</a>	
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-sm-9">
				<div style="width: 830px; height: 520px; position: fixed; border: 1px solid #eeeeee;">

				</div>
			</div>
		</div>
	</div>

	<script type="text/javascript">

		$(document).ready(function() {
			close_all_menu();
		});

		$(document).on("click", '#alltime', function() {
			$.ajax({
				url: "ajax_c/getAllTime",
				type: "get",
				success: function(response) {
					// var json_object = JSON.parse(response);
					var json_object = eval(response);
					for (var i = 0; i < 5; i++) {
						var obj = eval(json_object[i]);
						alert(obj.title + " " + obj.worldwide);
					};
				},
				error: function(xhr, error) {
					alert(xhr.responseText + error.Message);
				}
			});
		});

		function close_all_menu() {
			for (var i = 1; i <= 2; i++) {
				$("#" + i + "_menu").hide();
			};
		}

		function toggle_menu(id) {
			close_all_menu();
			$("#" + id + "_menu").toggle();
		}

	</script>
