<!DOCTYPE html>
<html>
<head>
	<title>Access Google Maps API in PHP</title>
	<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.5.0.js" integrity="sha256-r/AaFHrszJtwpe+tHyNi/XCfMxYpbsRg2Uqn0x3s2zc=" crossorigin="anonymous"></script>
	<script type="text/javascript" src="js/googlemap.js"></script>
	<style type="text/css">
		.container {
			height: 700px;
		}
		#map {
			width: 100%;
			height: 100%;
			border: 1px solid blue;
		}
		#data, #allData {
			display: none;
		}
	</style>
</head>
<body>
	<div class="container">
		<center><h1>Access Google Maps API in PHP</h1></center>
        <?php 
               require 'education.php';
               $edu = new education;
               $coll = $edu->getCollegesBlankLatLng();
               $coll = json_encode($coll, true);
               echo '<div id="data">' . $coll . '</div>';
                
               $allData = $edu->getAllColleges();
			$allData = json_encode($allData, true);
			echo '<div id="allData">' . $allData . '</div>';
        ?>
		<div id="map"></div>
	</div>
</body>
<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkySfcwFYkOAOKXmAGaupWgQ1mnpmVFow&callback=loadMap">
</script>
      
</html>