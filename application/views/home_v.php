
	<div class="container">
		<div class="row" style="padding-top: 0px; padding-bottom: 50px;">
			<!-- <div class="col-sm-3">
				<div data-spy="affix" data-offset-top="0">
					<ul id="my-nav" class="nav" style="background-color: #eeeeee; width: 250px;">
						<li>
							<a href="#" onclick="toggle_menu('1')">All time</a>
							<ul id="1_menu" class="custom-nav nav nav-stacked">
								<li>
									<a id="alltime_graph" href="#">Top Gross</a>
								</li>
								<li>
									<a id="yearly_graph" href="#">Year Gross</a>
								</li>
								<li>
									<a id="studios_graph" href="#">Studios Gross</a>
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
									<a id="alltime" href="#">All time</a>
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
									<a id="allpeople_graph" href="#">All people</a>
								</li>		
							</ul>
						</li>
					</ul>
				</div>
			</div> -->
			<div class="col-sm-12">
				<div id="compare" style="margin-top: 50px; margin-left: -35px;">
					<form class="form-horizontal" role="form">
						<div class="form-group">
							<label class="col-sm-2 control-label">First Studio</label>
							<div class="col-sm-3">
								<select id="first" class="form-control">
									<?php foreach($studios as $s) { ?>
										<option><?php echo $s['studio']; ?></option>
									<?php } ?>
								</select>
							</div>
							<label class="col-sm-2 control-label">Second Studio</label>
							<div class="col-sm-3">
								<select id="second" class="form-control">
									<?php foreach($studios as $s) { ?>
										<option><?php echo $s['studio']; ?></option>
									<?php } ?>
								</select>
							</div>
							<div class="col-sm-2" style="text-align: center;">
								<button id="compareStudio" type="button" class="btn btn-primary">Compare</button>
							</div>
						</div>
					</form>
					<div style="width: 800px; height: auto;">
						<div id="compareChart" style="width: 1120px;"></div>
					</div>
				</div>
				<div style="width: 800px; height: auto;">
					<!-- <canvas id="myChart" width="800" height="500"></canvas> -->
					<!-- <div id="studiocompareoption">
						<div class="row">
							<div class="col-sm-12" style="margin-top: 50px;">
									<label>Select Studio : </label>
									<select class="form-control">
										<?php foreach($studios as $s) { ?>
											<option><?php echo $s['studio']; ?></option>
										<?php } ?>
									</select>
									<hr>
									<label>Select Studio : </label>
									<select class="form-control">
										<?php foreach($studios as $s) { ?>
											<option><?php echo $s['studio']; ?></option>
										<?php } ?>
									</select>
							</div>
						</div>
					</div> -->
					<div id="myChart" style="width: 1120px;"></div>
					<!-- <div id="allpeople_range">
						<form oninput="amountMin.value=rangeMinInput.value">
						<input id="rangeMinInput" type="range" style="width: 500px;" onchange="setRange()">
						<span>Min $</span><output name="amountMin" for="rangeMinInput">0</output>
						</form>
						<form oninput="amountMax.value=rangeMaxInput.value">
						<input id="rangeMaxInput" type="range" min="0" max="4500" style="width: 500px;" onchange="setRange()">
						<span>Max $</span><output name="amountMax" for="rangeMaxInput">0</output>
						</form>
					</div> -->
				</div>
			</div>
		</div>
	</div>

	<script type="text/javascript">

		$(document).ready(function() {
			close_all_menu();
			$('#compare').hide();
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

		function setRange() {
			var max = document.getElementById("rangeMaxInput").value;
			$(".rangeMinInput").attr("max", "2000");
		}

	</script>
