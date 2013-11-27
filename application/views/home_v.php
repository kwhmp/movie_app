
	<div class="container">
		<div class="row" style="padding-top: 50px; padding-bottom: 50px;">
			<div class="col-sm-3">
				<div data-spy="affix" data-offset-top="0">
					<ul id="my-nav" class="nav" style="background-color: #eeeeee; width: 250px;">
						<li>
							<a href="#" onclick="toggle_menu('1')">All time</a>
							<ul id="1_menu" class="custom-nav nav nav-stacked">
								<li>
									<a id="alltime_graph" href="#">All time</a>
								</li>
								<li>
									<a id="yearly_graph" href="#">Year</a>
								</li>
								<li>
									<a id="studios_graph" href="#">Studios</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#" onclick="toggle_menu('2')">Yearly</a>
							<ul id="2_menu" class="custom-nav nav nav-stacked">
								<?php for($i = 2013; $i >= 2010; $i--) { ?>
									<li>
										<a href="#"><?php echo $i; ?></a>
									</li>
								<?php } ?>
							</ul>
						</li>
						<li>
							<a href="#" onclick="toggle_menu('3')">Studios</a>
							<ul id="3_menu" class="custom-nav nav nav-stacked">
								<li>
									<a id="Linechart_Studios" href="#">Studio in 10 years</a>
								</li>		
							</ul>
						</li>
						<li>
							<a href="#" onclick="toggle_menu('4')">Genres</a>
							<ul id="4_menu" class="custom-nav nav nav-stacked">
								<li>
									<a id="alltime" href="#">All time</a>
								</li>		
							</ul>
						</li>
						<li>
							<a href="#" onclick="toggle_menu('5')">People</a>
							<ul id="5_menu" class="custom-nav nav nav-stacked">
								<li>
									<a id="alltime" href="#">All time</a>
								</li>		
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-sm-9">
				<div style="width: 800px; height: 800px; margin-left: 25px; margin-bottom: 100px;">
					<!-- <canvas id="myChart" width="800" height="500"></canvas> -->
					<div id="myChart" style="height: 800px; width: 800px;"></div>
				</div>
			</div>
		</div>
	</div>

	<script type="text/javascript">

		$(document).ready(function() {
			close_all_menu();
		});

		function close_all_menu() {
			for (var i = 1; i <= 5; i++) {
				$("#" + i + "_menu").hide();
			};
		}

		function toggle_menu(id) {
			close_all_menu();
			$("#" + id + "_menu").toggle();
		}

	</script>
