<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Movie Analyzer</title>
		<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/bootstrap.css">
		<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/custom.css">
		<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/docs.css">
		<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery-2.0.3.min.js"></script>
		<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootstrap.js"></script>
		<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/Chart.js"></script>
		<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/polychart2.js"></script>
		<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/canvasjs.min.js"></script>
		<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/hmp-chart.js"></script>
		<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/ajax.js"></script>
	</head>
	<body>
		<div class="navbar navbar-default navbar-fixed-top" role="navigation" style="background-color: #2ECC71;">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#" style="color: white;">Movie Analyzer</a>
				</div>
				<div class="collapse navbar-collapse">
					<ul class="nav navbar-nav pull-right">
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" style="color: white;">All Time <b class="caret"></b></a>
							<ul class="dropdown-menu">
								<li><a id="alltime_graph" href="#">Top Gross</a></li>
								<li><a id="yearly_graph"href="#">Years Gross</a></li>
								<li><a id="studios_graph"href="#">Studios Gross</a></li>
								<li><a id="genres_graph"href="#">Genres Gross</a></li>
								<li><a id="people_graph"href="#">Actors & Actresses Top Gross</a></li>
							</ul>
						</li>
						<!-- <li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Yearly <b class="caret"></b></a>
							<ul class="dropdown-menu">
								<?php for ($i = 2013; $i >= 2000; $i--) { ?>
									<li><a href="#"><?php echo $i; ?></a></li>
								<?php } ?>
							</ul>
						</li> -->
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" style="color: white;">Genres <b class="caret"></b></a>
							<ul class="dropdown-menu">
								<li><a id="allgenrepie" href="#">All Genre</a></li>
								<li class="divider"></li>
								<?php foreach($genres as $genre) { ?>
									<!-- <li><a id="<?php echo $genre['genre'];?>" href="#"><?php echo $genre['genre'];?></a></li> -->
								<!-- <?php } ?> -->
								<li><a id="Action">Action</a></li>
								<li><a id="Adventure">Adventure</a></li>
								<li><a id="Animation">Animation</a></li>
								<li><a id="Family">Family</a></li>
								<li><a id="Fantasy">Fantasy</a></li>
								<li><a id="Romance">Romance</a></li>
								<li><a id="Sci-Fi">Sci-Fi</a></li>
								<li><a id="Thriller">Thriller</a></li>
							</ul>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" style="color: white;">Studios <b class="caret"></b></a>
							<ul class="dropdown-menu">
								<li><a id="Linechart_Studios" href="#">All Studio</a></li>
								<!-- <li class="divider"></li> -->
								<!-- <li><a id="toggleCompare" href="#">Compare between two studios</a></li> -->
								<li class="divider"></li>
								<?php foreach($studios as $s) { ?>
									<li><a id="<?php echo $s['studio'];?>" href="#"><?php echo $s['studio'];?></a></li>
								<?php } ?>
							</ul>
						</li>
						<!-- <li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Actors & Actresses <b class="caret"></b></a>
							<ul class="dropdown-menu">
								<?php foreach($people as $person) { ?>
									<li><a href="#"><?php echo $person['person'];?></a></li>
								<?php } ?>
							</ul>
						</li> -->
					</ul>
				</div><!--/.nav-collapse -->
			</div>
		</div>
